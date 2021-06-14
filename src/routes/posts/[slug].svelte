<script context="module">
  export const load = async ({ page, fetch }) => {
    console.log(page);
    const res = await fetch(`/posts/${page.params.slug}.json`);

    console.log(res);

    if (res.ok) {
      const jsonData = await res.json();
      const post = await jsonData[0];

      return {
        props: { post },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
  import { goto, prefetch } from "$app/navigation";
</script>

<script>
  import Button from "$lib/Button/index.svelte";
  import Message from "$lib/Message/index.svelte";
  import Card from "$lib/Cards/Card.svelte";

  export let post;
  let loading = false,
    edit = false,
    editSuccess = false,
    editError = false,
    errorMessage = "An Error has Occured";

  let title = post.title.rendered;
  let content = post.content.rendered;

  $: newPost = {
    title,
    content,
    status: "publish",
  };

  async function editPost() {
    let body = newPost;
    let token = localStorage.getItem("token");
    console.log(token);
    token = JSON.parse(token);
    loading = true;

    try {
      const res = await fetch(
        `https://www.imajenation.co.zw/mydiary/wp-json/wp/v2/posts/${post.id}`,
        {
          method: "PUT",
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
        console.log(data);
        editSuccess = true;

        loading = false;

        edit = false;
      } else {
        console.log("res has an error");
        loading = false;
        errorMessage = data.message;
        editError = true;
      }
    } catch (error) {
      console.log("ERROR!!!: ", error);
      loading = false;
    }
  }
  let successLogic = () => {
    editSuccess = false;

    goto(`/posts/${post.slug}?acas=97097`);
  };

  let errorLogic = () => {
    editError = false;

    goto(`/posts/${post.slug}?acas=97097`);
  };
</script>

<section class="p-5">
  <div class="max-w-screen-lg mx-auto">
    {#if !edit}
      <Card>
        <h1 class="text-2xl mb-3">{post.title.rendered}</h1>
        <div>{@html post.content.rendered}</div>
        <div
          on:click={() => {
            edit = true;
          }}
          class="absolute top-2 right-2 rounded-full bg-gray-200 hover:bg-gray-400 hover:text-gray-600 transition-all text-gray-400 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
      </Card>
    {:else}
      <Card>
        <label class="" for="title">Title</label>

        <input
          class="bg-gray-300 p-2 w-full rounded focus:shadow-lg ring-0 mb-3 border-gray-500 flex flex-col"
          id="title"
          type="text"
          bind:value={title}
        />

        <label class="" for="content">Content</label>

        <input
          class="bg-gray-300 p-2 w-full rounded focus:shadow-lg ring-0 mb-3 border-gray-500 flex flex-col"
          id="content"
          type="text"
          bind:value={content}
        />

        <Button on:click={editPost} color="blue" {loading}>Save</Button>
      </Card>
    {/if}
    {#if editSuccess}
      <Message color="green" timeout={3000} logic={successLogic}>
        <span slot="message" class="text-xl"> Edit successfull </span>

        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      </Message>
    {/if}
    {#if editError}
      <Message color="red" timeout={3000} logic={errorLogic}>
        <span slot="message" class="text-xl"> {errorMessage} </span>

        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
          />
        </svg>
      </Message>
    {/if}
  </div>
</section>
