import { Community, Hero, SpaceGrid, Map } from "../components";

let Homepage = () => (
  <>
    <main className="relative z-10 container mx-auto py-8 space-y-8">
      <Hero></Hero>
      <Map></Map>
      <SpaceGrid></SpaceGrid>
      <Community></Community>
    </main>
  </>
);
export default Homepage;
