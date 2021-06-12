<script>
  import { page } from "$app/stores";
</script>

<header class="bg-blue-100">
  <div class="corner" />

  <nav class="absolute right-0 logo w-12">
    <a class="text-blue-100 hover:no-underline" href="/">
      <li
        class:active={$page.path === "/"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        Home
      </li></a
    >
    <a class="text-blue-100 hover:no-underline" href="/">
      <li
        class:active={$page.path === "/about"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        About
      </li></a
    >
    <a class="text-blue-100 hover:no-underline" href="/">
      <li
        class:active={$page.path === "/todos"}
        class="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200"
      >
        Todos
      </li></a
    >
  </nav>

  <div class="corner">
    <!-- TODO put something else here? github link? -->
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  .logo {
    background-color: #001a70;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 10%;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
