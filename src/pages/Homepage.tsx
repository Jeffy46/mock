import { Community, Hero, SpaceGrid, Workshops } from "../components";

let Homepage = () => (
  <>
    <main className="relative z-10 container mx-auto py-8 space-y-8">
      <Hero></Hero>
      <Workshops></Workshops>
      <SpaceGrid></SpaceGrid>
      <Community></Community>
    </main>
  </>
);
export default Homepage;
