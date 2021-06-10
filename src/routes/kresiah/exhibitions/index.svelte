<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/kresiah/exhibitions.json");

    console.log(res);
    if (res.ok) {
      const jsonData = await res.json();
      const kresiah = await jsonData;

      return {
        props: { kresiah },
      };
    }

    //const { message } = await res.json();

    return {
     // error: new Error(message),
    };
  };
</script>

<script>
  import Animate from "$lib/Animate.svelte";
</script>

<Animate>
  <section class="w-full md:flex   ">
    <div
      class="text-gray-300 lg:text-9xl md:text-7xl  text-5xl font-bold  pt-6 "
    >
      Exhibition
    </div>
    <div class="max-w-screen-xl mx-auto md:text-right pl-6">
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
      <h2>2018 Beautiful Trouble Jam Session – Arusha, Tanzania</h2>
    </div>
  </section>
</Animate>
