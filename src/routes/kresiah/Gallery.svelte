<script>
  import imag from "$lib/Kresiah-Mukwazhi_Bit-by-Bit_2018_Mixed-Media_90-x-50-x-20-cm.jpeg";
  import Animate from "$lib/Animate.svelte";
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
        <a class="hover:text-red-400" href="">Painting</a>
        <a class="hover:text-red-400" href="">Performance</a>
        <a class="hover:text-red-400" href="">Photography</a>
        <a class="hover:text-red-400" href="">Sculpture</a>
      </ul>
    </div>
  </section>
  <section class="w-full">
    <div class="max-w-screen-xl mx-auto  md:grid md:grid-cols-3">
      <div class="m-8 px-4">
        <div class="">
          <h2 class="text-gray-400">Painting</h2>
          <h2 class="text-gray-400">Performance</h2>
          <h2 class="text-gray-400">Photography</h2>
          <h2 class="font-bold text-black">Sculpture</h2>
        </div>

        <div class="pl-4">
          <h2 class="text-gray-400">2015</h2>
          <h2 class="font-bold text-black">2014</h2>
          <h2 class="text-gray-400">2017</h2>
          <h2 class="text-gray-400">2018</h2>
        </div>
      </div>

      <div class=" w-full mt-6">
        <img src={imag} alt="" />
      </div>

      <div class="md:py-80 px-8  m-4">
        <h2 class="text-gray-700 ">
          Title of the Sculpture <br /> Dimension? <br /> 2014
        </h2>
      </div>
    </div>
  </section>
</Animate>
