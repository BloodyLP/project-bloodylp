import StoryHeader from "./StoryHeader";
import StoryGrid from "./StoryGrid";

export default function StorySection() {
  return (
    <section className="mx-auto mt-48 max-w-7xl px-8">

      <StoryHeader />

      <StoryGrid />

    </section>
  );
}