import { useEffect, useRef } from "react";

const COLORS = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"] as const;

const ICONS = [
  "fa-solid fa-hammer",
  "fa-solid fa-wrench",
  "fa-solid fa-pencil",
  "fa-solid fa-camera",
  "fa-solid fa-lightbulb",
  "fa-solid fa-gear",
  "fa-solid fa-paintbrush",
  "fa-solid fa-scissors",
  "fa-solid fa-ruler-combined",
  "fa-solid fa-code",
  "fa-solid fa-palette",
  "fa-solid fa-microchip",
  "fa-solid fa-bolt",
  "fa-solid fa-computer-mouse",
  "fa-solid fa-eye",
  "fa-solid fa-compass-drafting",
  "fa-solid fa-rocket",
  "fa-solid fa-cloud-arrow-up",
  "fa-solid fa-floppy-disk",
  "fa-solid fa-lock",
  "fa-solid fa-keyboard",
  "fa-solid fa-battery-full",
  "fa-solid fa-flask",
  "fa-solid fa-wand-magic-sparkles",
  "fa-solid fa-compass",
  "fa-solid fa-thumbtack",
  "fa-solid fa-tag",
  "fa-solid fa-folder",
  "fa-solid fa-pen-nib",
  "fa-solid fa-tablet-screen-button",
  "fa-solid fa-gamepad",
  "fa-solid fa-mug-hot",
] as const;

const BASE_GRID_SPACING_X = 120;
const BASE_ROW_HEIGHT = 80;
const BASE_ITEM_SIZE = 36;

interface GridItem {
  el: HTMLDivElement;
  x: number;
  y: number;
}

export interface AnimatedBackgroundProps {
  fallSpeed?: number;
  gridScale?: number;
  rotationSpeed?: number;
  darkMode?: boolean;
  bgOpacity?: number;
}

export default function AnimatedBackground({
  fallSpeed = 0.5,
  gridScale = 1.4,
  rotationSpeed = 0.5,
  darkMode = false,
  bgOpacity = 0,
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<GridItem[]>([]);
  const totalGridHeightRef = useRef(0);
  const fallSpeedRef = useRef(fallSpeed);
  const gridScaleRef = useRef(gridScale);

  useEffect(() => {
    fallSpeedRef.current = fallSpeed;
  }, [fallSpeed]);

  useEffect(() => {
    gridScaleRef.current = gridScale;
  }, [gridScale]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function createItem(
      container: HTMLDivElement,
      row: number,
      col: number,
      spacingX: number,
      rowHeight: number,
      size: number,
    ) {
      const el = document.createElement("div");
      Object.assign(el.style, {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
        width: `${size * 1.5}px`,
        height: `${size * 1.5}px`,
      });

      let x = col * spacingX;
      if (row % 2 !== 0) x += spacingX / 2;
      x -= 50;
      const y = row * rowHeight;

      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.animation =
        "bg-lattice-spin var(--bg-spin-duration, 12s) linear infinite";

      const icon = document.createElement("i");
      icon.className = ICONS[Math.floor(Math.random() * ICONS.length)];
      icon.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      icon.style.fontSize = `${size}px`;

      wrapper.appendChild(icon);
      el.appendChild(wrapper);
      container.appendChild(el);

      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      itemsRef.current.push({ el, x, y });
    }

    function initGrid(container: HTMLDivElement) {
      container.innerHTML = "";
      itemsRef.current = [];

      const scale = gridScaleRef.current;
      const spacingX = BASE_GRID_SPACING_X * scale;
      const rowHeight = BASE_ROW_HEIGHT * scale;
      const itemSize = BASE_ITEM_SIZE * scale;

      const cols = Math.ceil(window.innerWidth / spacingX) + 2;
      let rows = Math.ceil(window.innerHeight / rowHeight) + 4;
      if (rows % 2 !== 0) rows++;
      totalGridHeightRef.current = rows * rowHeight;

      for (let r = -2; r < rows - 2; r++) {
        for (let c = -1; c < cols; c++) {
          createItem(container, r, c, spacingX, rowHeight, itemSize);
        }
      }
    }

    initGrid(container);

    let resizeTimeout: ReturnType<typeof setTimeout> | undefined = undefined;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      const current = containerRef.current;
      if (!current) return;
      initGrid(current);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [gridScale]);

  useEffect(() => {
    let rafId: number;

    function animate() {
      const speed = fallSpeedRef.current;
      const scale = gridScaleRef.current;
      const totalGridHeight = totalGridHeightRef.current;
      const buffer = 200 * scale;

      for (const item of itemsRef.current) {
        item.y += speed;
        if (item.y > window.innerHeight + buffer) {
          item.y -= totalGridHeight;
        }
        item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-spin-duration",
      `${6 / rotationSpeed}s`,
    );
  }, [rotationSpeed]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -10,
        backgroundColor: darkMode ? "#202124" : "#ffffff",
        transition: "background-color 0.3s ease",
        pointerEvents: "none",
      }}
    >
      <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: darkMode ? "#202124" : "#ffffff",
          opacity: bgOpacity,
          transition: "background-color 0.3s ease, opacity 0.1s ease-out",
        }}
      />
      <style>{`
        @keyframes bg-lattice-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
