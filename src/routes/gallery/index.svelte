<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const res = await fetch("/gallery.json");
      console.log(res);
      if (res.ok) {
        const galleryData = await res.json();
        const gallery = await galleryData;

        return {
          props: { gallery },
        };
      }

      //const { message } = await res.json();

      return {
        // error: new Error(message),
      };
    } catch (error) {
      console.error(error);
    }
  };
</script>

<script>
  import Animate from "$lib/Animate.svelte";
  import { content } from "$lib/js/store.js";
  import Slide from "$lib/slide/Slide.svelte";
  import { each } from "svelte/internal";

  export let gallery;
  $content.gallery = gallery;
  console.log(gallery);
</script>

<Animate>
  <section class="w-full md:flex relative items-center h-screen ">
    <div
      class="text-gray-300 lg:text-9xl md:text-7xl  text-5xl font-bold absolute pt-6 "
    >
      Gallery
    </div>

    <div
      class="max-w-screen-xl mx-auto w-full  font-bold text-gray-900  text-right lg:text-6xl md:text-5xl text-3xl"
    >
      <ul class="flex flex-col">
        {#each $content.gallery as collection}
          <li>
            <a
              sveltekit:prefetch
              class="hover:text-gray-400"
              href="/gallery/{collection.slug}"
            >
              <h2>{collection.title.rendered}</h2>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</Animate>
