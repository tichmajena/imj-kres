<script>
  import Exhibition from "./exhibitions/index.svelte";
  import Gallery from "./Gallery.svelte";
  import Abt from "./About.svelte";
  import Contact from "./Contact.svelte";
  import Animate from "$lib/Animate.svelte";
</script>

<Animate>
  <section class="w-full relative">
    <div
      class="text-gray-300 lg:text-9xl md:text-7xl  text-5xl font-bold absolute top-1/2  "
    >
      KRES.
    </div>
    <div class="max-w-screen-xl mx-auto bg-gray-400 pl-32 pr-4 ">
      <div class="w-full p-12 h-96  bg-gray-600" />
    </div>
  </section>

  <Abt />

  <Gallery />

  <Exhibition />

  <Contact />
</Animate>
