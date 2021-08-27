<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const res = await fetch("/about.json");
      console.log(res);
      if (res.ok) {
        const aboutData = await res.json();
        const about = await aboutData;

        return {
          props: { about },
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

  export let about;
  console.log(about);
</script>

<Animate>
  <section class="w-full">
    <div class="max-w-screen-xl mx-auto md:flex m-8 lg:px-64 md:px-24 px-4">
      <div class="text-2xl md:text-right pl-6">
        <div>
          {about.title.rendered}
        </div>

        <div class="w-8 border-black border-b-4 inline-block" />
      </div>

      <div class="pl-8">
        <p>
          {@html about.content.rendered}
        </p>
      </div>

      <!-- {#each about as info}
          
        {:else}
          <h5>About is empty</h5>
        {/each} -->
    </div>
  </section>
</Animate>
