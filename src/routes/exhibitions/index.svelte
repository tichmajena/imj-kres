<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const res = await fetch("/exhibitions.json");
      console.log(res);
      if (res.ok) {
        const exhibitionData = await res.json();
        const exhibitions = await exhibitionData;

        return {
          props: { exhibitions },
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

  export let exhibitions;
  console.log(exhibitions);
</script>

<Animate>
  <section class="w-full flex">
    <div
      class="text-gray-300 lg:text-9xl md:text-7xl text-center text-5xl font-bold  pt-6 "
    >
      Exhibition
    </div>
    <div class="max-w-screen-xl w-full  mx-auto md:text-left space-y-4  pl-32">
      {#each exhibitions as exhibition}
        <h4>
          {exhibition.period}
          {exhibition.title.rendered}
          {exhibition.organiser}
          {exhibition.place}
        </h4>
      {:else}
        <h5>Exhibitions is empty</h5>
      {/each}
    </div>
  </section>
</Animate>
