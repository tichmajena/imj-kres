<script>
  import great from "/static/great-zimbabwe.jpg";
  import logo from "/static/customcolor_logo_transparent_background.png";

  import Buttons from "$lib/components/Buttons.svelte";
  import Events from "$lib/components/Events.svelte";
  import Resources from "$lib/components/Resources.svelte";
  import Programs from "$lib/components/Programs.svelte";
  import Blog from "$lib/components/Blog.svelte";
</script>

<div class="relative px-16 py-4 bg-blue-100">
  <div class="">
    <img src={great} alt="" />
  </div>
  <div class="absolute top-0 left-0 mt-8 ml-8">
    <img
      class="relative lg:z-10 z-10  lg:h-40 h-20 lg:mt-2 mt-2 lg:mb-2 "
      src={logo}
      alt=""
    />
    <div
      class="lg:h-44  lg:w-44  bg-white absolute  top-0  left-0 rounded-full lg:ml-11"
    />
    <div
      class="lg:h-44  lg:w-44  bg-white absolute  top-0  left-0 rounded-full lg:ml-11"
    />
  </div>
  <div class="p-12">
    <!-- <div class="h-64 "></div> -->
    <div class="law bg-blue-900  mt-10 p-4 rounded-lg md:mt-10 md:p-20 ">
      <h2
        class="mt-6 text-xl ml-4 text-white -sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
      >
        The Constitutionl Law Center(CLC) is an advocacy group that brings
        together diverse individuals and organisations to promote, explain and
        defend the constitution, constitutionalism and the rule of law in
        Zimbabwe and the region.
      </h2>
      <div class="pl-4">
        <Buttons />
      </div>
    </div>

    <h1 class="mt-10 text-3xl program font-bold ">Our Programs</h1>
    <div class="flex text-xl">
      <Programs />
    </div>
  </div>
</div>
<div class="reso_div pt-10">
  <div class="p-12">
    <h1 class="text-white text-4xl ">Resources</h1>
    <div class="flex text-xl">
      <Resources />
    </div>
    <h2 class="text-white mt-8 text-4xl">Events</h2>
    <h4 class="text-white font-bold">
      _________________________________________
    </h4>
    <div class="text-xl">
      <Events />

      <div class="pl-6"><Buttons /></div>
    </div>
  </div>
</div>

<div>
  <div class="p-12 text-xl">
    <Blog />
  </div>
</div>

<div class="md:pl-96 pl-48 ">
  <button
    class="mt-6 bg-blue-500 px-5 py-2 rounded-lg 
   hover:bg-blue-300 text-blue-900 border-2 border-blue-900 "
    href="#"
  >
    Learn More
  </button>
</div>

<div class="reso_div pt-80 mt-10" />

<style>
  .law {
    background-color: #001a70;
  }
  .program {
    color: #001a70;
  }
  .reso_div {
    background-color: #001a70;
  }

  .learn {
    color: #001a70;
  }
</style>
