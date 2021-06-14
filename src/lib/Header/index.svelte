<script>
  import { page } from "$app/stores";
</script>

<header class="bg-gray-200 p-3">
  <nav class="">
    <ul class="flex">
      <a class="mx-4 hover:text-gray-500" href="/">
        <li class:text-red-500={$page.path === "/"} class="">Home</li></a
      >
      <a class="mx-4" href="/about">
        <li class:text-red-500={$page.path === "/about"} class="">About</li></a
      >
      <a class="mx-4" href="/posts">
        <li class:text-red-500={$page.path === "/posts"} class="">Posts</li></a
      >
    </ul>
  </nav>
</header>
