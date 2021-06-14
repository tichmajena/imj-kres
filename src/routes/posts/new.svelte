<script>
  let title;
  let content;

  $: newPost = {
    title,
    content,
    status: "publish",
  };

  async function addPost() {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    let body = newPost;
    try {
      const res = await fetch(
        "https://imajenation.co.zw/mydiary/wp-json/wp/v2/posts/",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        console.log("res is okay");
      } else {
        console.log("res has an error");
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
    }
  }
</script>

<section>
  <div class="max-w-screen-lg mx-auto p">
    <h1 class="text-2xl font-bold ">Notes</h1>

    <div class="">
      <label class="" for="input-name">Title</label>

      <input
        class="bg-white ring-0 hover:ring-0  hover:bg-red-400 flex flex-col"
        type="text"
        bind:value={title}
      />

      <label class="" for="input-email">Content</label>

      <input
        class="bg-white ring-0 hover:ring-0 hover:bg-red-400 flex flex-col"
        type="text"
        bind:value={content}
      />

      <button on:click={addPost} class="red white-text bg-blue-600 m-2 w-16"
        >Save</button
      >
    </div>
  </div>
</section>
