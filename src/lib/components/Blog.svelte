<script>
  import Buttons from "../components/Buttons.svelte";
</script>

<slot />
<h1 class="blog text-4xl pt-10">Our Blog</h1>
<div class="flex ">
  <div class="stratege1 mt-8 p-24  rounded-lg ">
    <h1 class="text-white">Srategic Education and awareness</h1>
    <Buttons />
  </div>
</div>

<style>
  .blog {
    color: #001a70;
  }
  .stratege1 {
    background-color: #5e71e9;
  }
</style>
