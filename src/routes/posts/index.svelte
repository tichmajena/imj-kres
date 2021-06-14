<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/posts.json");

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const posts = await jsonData;

      return {
        props: { posts },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
</script>

<script>
  export let posts;

  let title;
  let content;

  $: newPost = {
    title,
    content,
    status: "publish",
  };
</script>

<section>
  <div class="max-w-screen-lg p-2 mx-auto">
    <a href="/posts/new">
      <button
        class="px-6 py-2 mb-5 text-white rounded bg-pink-700 hover:bg-pink-500"
        >New</button
      >
    </a>
    <h1 class="mb-5 text-4xl">Posts</h1>
    <ul>
      {#each posts as post, index}
        <li>
          <a
            class="hover:text-red-600"
            sveltekit:prefetch
            href="/posts/{post.slug}"
          >
            <h5>{post.title.rendered}</h5></a
          >
        </li>
      {/each}
    </ul>
  </div>
</section>
