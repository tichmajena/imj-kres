<script>
  import { page } from "$app/stores";
  let menu = false;

  function showMenu() {
    menu = true;
  }
</script>

<section class="w-full">
  <div class="w-full max-w-screen-xl mx-auto md:p-4">
    <div class="font-bold md:text-5xl lg:text-7xl text-3xl mt-8">
      KRESIAH MUKWAZHI
    </div>
    <div class=" md:flex hidden">
      <div class="w-full border-black border-b-2 my-10" />
      <nav>
        <ul class="flex justify-between">
          <li class="py-8 px-4" class:active={$page.path === "/kresiah"}>
            <a sveltekit:prefetch href="/kresiah">Home</a>
          </li>
          <li class="py-8 px-4" class:active={$page.path === "/kresiah/About"}>
            <a sveltekit:prefetch href="/kresiah/About">ABOUT</a>
          </li>
          <li
            class="py-8 px-4"
            class:active={$page.path === "/kresiah/Gallery"}
          >
            <a sveltekit:prefetch href="/kresiah/Gallery">GALLERY</a>
          </li>
          <li
            class="py-8 px-4"
            class:active={$page.path === "/kresiah/exhibitions"}
          >
            <a sveltekit:prefetch href="/kresiah/exhibitions">EXHIBITIONS</a>
          </li>
          <li
            class="py-8 px-4"
            class:active={$page.path === "/kresiah/Contact"}
          >
            <a sveltekit:prefetch href="/kresiah/Contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="md:hidden">
      <div class="">
        <nav class="absolute right-0 logo w-14">
          <svg
            on:click={showMenu}
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 relative "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </nav>
      </div>
    </div>
  </div>
</section>

<slot />
