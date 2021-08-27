<script context="module">
  // see https://kit.svelte.dev/docs#loading
  import { goto, prefetch } from "$app/navigation";

  export const load = async ({ page, fetch }) => {
    try {
      const resPost = await fetch(`/gallery/${page.params.slug}.json`);
      if (resPost.ok) {
        console.log("resPost is ok");
        const data = await resPost.json();
        const post = await data[0];

        return {
          props: { post },
        };
      }
    } catch (error) {
      console.log(error);
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  import Slide from "$lib/slide/Slide.svelte";
  import kres1 from "$lib/images/gallery_img_01.jpeg";
  import { content } from "$lib/js/store";
import { page } from "$app/stores";

  export let post;

  const local = [
    { id: 1, src: kres1 },
    { id: 2, src: kres1 },
  ]; // slides items

  console.log(post.gallery_pics);
  let arr = Object.entries(post.gallery_pics);
  console.log(arr);
  let pics = arr.map((k) => {
    console.log(k[1]);
    return { id: k[1].ID, src: k[1].guid };
  });
  console.log(pics);
</script>

<div>
  <h2>{post.title.rendered}</h2>
</div>
<section class="w-full bg-yellow-200 p-5">
  <div class="w-full mx-auto max-w-screen-xl" />
</section>
<section class="w-full">
  <div class="max-w-screen-xl mx-auto  md:grid md:grid-cols-3">
    <div class="m-8 px-4">
      <div class="">
        <ul>
          {#each $content.gallery as collection}
            <li>
              <a href="/gallery/{collection.slug}">
                <h2 class:text-black={$page.path==="/gallery/{collection.slug}"} class="text-gray-400">{collection.title.rendered}</h2>
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="pl-4">
        <h2 class="text-gray-400">2015</h2>
        <h2 class="font-bold text-black">2014</h2>
        <h2 class="text-gray-400">2017</h2>
        <h2 class="text-gray-400">2018</h2>
      </div>
    </div>

    <div class=" w-full mt-6">
      <Slide {pics} />
    </div>

    <div class="md:py-80 px-8  m-4">
      <h2 class="text-gray-700 ">
        Title of the Sculpture <br /> Dimension? <br /> 2014
      </h2>
    </div>
  </div>
</section>
