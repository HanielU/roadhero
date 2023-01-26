<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { clsx } from "clsx";
  import RHLogo from "./RoadHeroLogo.svelte";
  import RoadHeroLogo from "./RoadHeroLogo.svelte";

  $: tabs = [
    {
      name: "Home",
      path: "/",
      iconName: "i-ic-round-home",
      get status() {
        return $page.url.pathname == this.path;
      },
    },
    {
      name: "Map",
      path: "/map",
      iconName: "i-material-symbols-map-outline-rounded",
      get status() {
        return $page.url.pathname == this.path;
      },
    },
    {
      name: "Profile",
      path: "/profile",
      iconName: "i-ion-person",
      get status() {
        return $page.url.pathname == this.path;
      },
    },
  ];
</script>

<div
  class="fixed z-1 ring-2 ring-secondaryGreen ring-offset-4 bottom-[3.75rem] right-4 inline-flex w-14 h-14 items-center p-4 justify-center rounded-full bg-grey"
>
  <RoadHeroLogo />
</div>

<div class="fixed bottom-0  w-screen  rounded-t-2xl bg-black px-5 py-3 text-white transition">
  <div class="container mx-auto flex items-center justify-between">
    {#each tabs as { name, path, status, iconName }}
      <a href={path}>
        <div
          class="tab p-2 w-[100px] rounded-full flex items-center justify-evenly transition ease-out"
          class:active={status}
        >
          <span class="{iconName}, text-2xl fw100 " />
          <span text-xs class={status ? "inline-block" : "hidden"}>{name}</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .tab.active {
    width: 200px;
    @apply bg-secondaryGreen;
  }
</style>
