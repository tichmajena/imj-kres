<script>
  import Message from "$lib/Message/index.svelte";
  import Button from "$lib/Button/index.svelte";
  import { goto, prefetch } from "$app/navigation";

  let loginError = false;
  let loginSuccess = false;
  let loading = false;
  let errorMessage;

  import { scale, fade } from "svelte/transition";
  let username = "berlin@imajenation.co.zw";
  let password = "M@jena0347";
  async function login() {
    loading = true;
    let body = {
      username,
      password,
    };
    try {
      const res = await fetch(
        "https://imajenation.co.zw/mydiary/wp-json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();
      console.log(res);
      console.log(data);

      if (res.ok) {
        console.log("res is okay");
        localStorage.setItem("token", JSON.stringify(data.token));
        let token = localStorage.getItem("token");
        console.log(JSON.parse(token));
        console.log(data);
        loginError = false;
        loading = false;
        loginSuccess = true;
      } else {
        loginError = true;
        loading = false;
        errorMessage = data.message;
      }
    } catch (error) {
      console.log(error);
    }
  }

  let successLogic = () => {
    loginSuccess = false;

    //goto(`/posts/${post.slug}?acas=97097`);
  };

  let errorLogic = () => {
    loginError = false;

    // goto(`/posts/${post.slug}?acas=97097`);
  };
</script>

<section class="p-5">
  <div class="max-w-screen-lg mx-auto">
    <div
      in:scale
      out:scale
      class="mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg"
    >
      <h3 class="text-center text-2xl mb-5">Login</h3>
      <input
        bind:value={username}
        class:border-red-700={loginError === true}
        class:bg-red-200={loginError === true}
        class="w-full rounded mb-5"
        placeholder="Email"
        type="text"
      />
      <input
        bind:value={password}
        class:border-red-700={loginError === true}
        class:bg-red-200={loginError === true}
        class="w-full rounded mb-5"
        placeholder="Password"
        type="password"
      />
      {#if loginError === true}
        <span class="text-red-700 block mb-5">Error, I think pane zvaitika</span
        >
      {/if}
      <Button on:click={login} {loading}>Login</Button>
    </div>

    {#if loginSuccess}
      <Message color="green" timeout={3000} logic={successLogic}>
        <span slot="message" class="text-xl"> Login successfull </span>

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
    {#if loginError}
      <Message color="red" timeout={3000}>
        <span slot="message" class="text-xl"> {@html errorMessage} </span>

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
