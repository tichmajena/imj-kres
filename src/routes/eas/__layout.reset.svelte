<script>
  import { page } from "$app/stores";
</script>

<nav class="hidden md:flex">
  <ul class="flex justify-between">
    <li class="px-8 p-6 " class:active={$page.path === "/"}>
      <a sveltekit:prefetch href="/">Home</a>
    </li>
    <li class="px-8 p-6 " class:active={$page.path === "/work"}>
      <a sveltekit:prefetch href="/work">Work</a>
    </li>
    <li class="px-8 p-6 " class:active={$page.path === "/services"}>
      <a sveltekit:prefetch href="/services">Case Studies</a>
    </li>
    <li class="px-8 p-6 " class:active={$page.path === "/posts"}>
      <a sveltekit:prefetch href="/posts">Blog</a>
    </li>
    <li class="px-8 p-6 " class:active={$page.path === "/contact"}>
      <a sveltekit:prefetch href="/contact">Contact</a>
    </li>
    <li class="px-8 p-6 " class:active={$page.path === "/workcation"}>
      <a sveltekit:prefetch href="/workcation">Workcation</a>
    </li>
    <li class="px-8 p-6 " class:active={$page.path === "/appNotes"}>
      <a sveltekit:prefetch href="/appNotes">App Notes</a>
    </li>
  </ul>
</nav>
<div class="md:hidden">menu</div>

<main>
  <slot />
</main>

<footer />

<style>
</style>
