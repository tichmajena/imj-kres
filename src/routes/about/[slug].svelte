<script context="module">
    // see https://kit.svelte.dev/docs#loading
    import { goto, prefetch } from "$app/navigation";
  
    export const load = async (ctx) => {
      const res = await fetch(
        `http://proxy.kresiahmukwazhi.com/wp-json/wp/v2
        /kresiah/?slug=${ctx.page.params.slug}`
      );
      if (res.ok) {
        console.log("res is ok");
        const data = await res.json();
        const post = await data[0];
  
        console.log(post);
  
        return {
          props: { post },
        };
      }
  
      const { message } = await res.json();
  
      return {
        error: new Error(message),
      };
    };
  </script>
  