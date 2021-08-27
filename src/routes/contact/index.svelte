<script>
  import Animate from "$lib/Animate.svelte";
</script>

<Animate>
  <section class="w-full ">
    <div
      class="text-gray-300 lg:text-9xl md:text-7xl  text-5xl font-bold  pt-6 "
    >
      Hi Kres.
    </div>
    <div class="max-w-screen-xl w-full mx-auto">
      <form class="flex flex-col items-center " action="">
        <div class="input-group ">
          <input
            class="outline-none"
            type="text"
            name=""
            id="name"
            placeholder=" "
          />
          <label for="name">Name</label>
        </div>
        <div class="input-group">
          <input
            class="outline-none"
            type="text"
            name=""
            id="email"
            placeholder=" "
          />
          <label for="email">Email</label>
        </div>
        <div class="input-group">
          <input
            class="outline-none"
            type="text"
            name=""
            id="subject"
            placeholder=" "
          />
          <label for="subject">Subject</label>
        </div>
        <div class="input-group">
          <textarea
            name=""
            cols="44"
            rows="3"
            class="outline-none"
            type="text"
            id="message"
            placeholder=" "
          />
          <label for="message">Message</label>
        </div>
      </form>
      <div class="max-w-screen-xl w-full">
        <div class="flex flex-row w-full justify-center pr-44 space-x-8">
          <button class="text-gray-900 ">Attachment</button>

          <button class="text-white bg-gray-900 py-2 px-2">Choose File</button>
        </div>
        <div class="flex flex-row justify-center  pr-72 pt-8 pl-2">
          <button class="text-white bg-gray-900 justify-center py-2 px-8">
            Send
          </button>
        </div>
      </div>
    </div>
  </section>

  <style>
    :root {
      --body: #ffffff;
      --text: #363636;
      --text-light: #898989;
      --primary: #1bbeff;
      --border: #bbbbbb;
      --padding: 16px 24px;
      --line-height: 24px;
    }

    body {
      background-color: var(--body);
    }

    .input-group {
      width: 360px;
      position: relative;
      border-bottom: 3px solid var(--border);
      /* border-radius: 8px; */
      margin: 12px;
    }
    .input-group input {
      padding: var(--padding);
      border: none;
      background-color: transparent;
      width: 100%;
      color: var(--text);
      font-size: 16px;
      line-height: var(--line-height);
    }

    .input-group:hover,
    .input-group:focus-within {
      border-color: var(--primary);
    }

    .input-group input:focus,
    .input-group:hover input {
      color: var(--primaty);
    }

    .input-group label {
      position: absolute;
      background-color: transparent;
      padding: var(--padding);
      line-height: var(--line-height);
      top: 0;
      left: 0;
      bottom: 0;
      color: var(--text-light);
      cursor: text;
    }

    .input-group:hover label {
      color: var(--primary);
    }

    .input-group:focus-within label,
    .input-group input:not(:placeholder-shown) ~ label {
      padding: 0px 8px;
      background-color: var(--body);
      top: -12px;
      left: 16;
      bottom: auto;
      color: var(--text);
    }
  </style>
</Animate>
