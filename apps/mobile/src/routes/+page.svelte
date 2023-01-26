<script lang="ts">
  import Search from "./components/Searchbar.svelte";
  // import { onDestroy, onMount } from "svelte";
  // import { isCollide } from "$lib/utils";
  import clsx from "clsx";
  import Post from "./components/Post.svelte";
  import { get } from "svelte/store";
  import { pb } from "@packages/api/src/context";
  import { onMount } from "svelte";
  import welcome from "$lib/assets/img/welcome-3.png";
  import { trpc } from "$lib/trpc";
  // let header: Element;
  // let headerCollides: boolean;

  // // using the "#app" div instead of "body" because overflow is set to hidden on the body
  // // therefore the scroll event has no effect on the body, but works on "#app"
  // onMount(() => document.querySelector("#app")!.addEventListener("scroll", handleScroll));

  // onDestroy(() => document.querySelector("#app")!.removeEventListener("scroll", handleScroll));

  // function handleScroll() {
  //   if (!header) return;
  //   headerCollides = isCollide(header, document.querySelector("#container")!);
  // }
  let posts: any[] = [];

  onMount(async () => {
    const resultList = await trpc.reports.get.query();
    console.log({ resultList });
    posts = resultList.items;
  });

  let selected = false;
</script>

<!-- <div
  bind:this={header}
  class={clsx("top-0 sticky bg-white z-999", headerCollides && "border-b-2 border-secondaryGreen")}
> -->
<div class="sticky top-0 z-999 bg-white">
  <Search />
</div>

<div class="m-4 px-1" id="container">
  <div flex justify-between items-center>
    <div>
      <select
        name="fliter"
        id=""
        class="border border-primaryBlue bg-transparent p-2 mb-4 rounded-lg text-primaryBlue outline-none"
      >
        <option value="new">Newest</option>
        <option value="appreciated">Appreciated</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>

    <div class="flex items-center overflow-auto mb-4 ml-4 space-x-2 shadow-inner p-1 rounded-full">
      {#each [...Array(5)] as element}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="flex border-primaryBlue rounded-full border w-fit p-2 text-xs space-x-1"
          on:click={() => {
            selected = !selected;
          }}
        >
          <div>Potholes</div>
          <div class={selected ? "i-carbon-subtract" : "i-material-symbols-add"} />
        </div>
      {/each}
    </div>
  </div>

  {#if posts.length === 0}
    <div class="flex flex-col justify-center items-center h-150">
      <img src={welcome} alt="" />
      <p class="text-2xl text-primaryBlue">No reports yet</p>
    </div>
  {:else}
    {#each posts as post (post.id)}
      <Post reportId={post.id} />
    {/each}
  {/if}
</div>
