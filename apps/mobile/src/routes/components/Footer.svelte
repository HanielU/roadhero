<script lang="ts">
  import Link from "./Link.svelte";
  import clsx from "clsx";
  import { page } from "$app/stores";
  import type { NavLink } from "$lib/types";
  import RoadHeroLogo from "./RoadHeroLogo.svelte";
  import { goto } from "$app/navigation";

  export let footerHeight: number;

  const footerLinks: NavLink[] = [
    {
      path: "/",
      name: "Home",
      classes: {
        fill: "i-mingcute-home-3-fill !text-xl  ",
        line: "i-mingcute-home-3-line !text-xl opacity-50 ",
      },
    },
    {
      path: "/map",
      name: "Map",
      classes: {
        fill: "i-mingcute-map-fill !text-xl ",
        line: "i-mingcute-map-line !text-xl opacity-50 ",
      },
    },
    {
      path: "/profile",
      name: "Profile",
      classes: {
        fill: "i-material-symbols-person-4-rounded !text-xl ",
        line: "i-material-symbols-person-4-outline-rounded !text-xl opacity-50  ",
        // wrapper:
        //   "after:(content-empty absolute top-2px right-2px square-2 bg-orange-v-400 rounded-full)",
      },
    },
    {
      path: "",
      name: "",
      classes: {
        fill: "",
        line: "",
        // wrapper:
        //   "after:(content-empty absolute top-2px right-2px square-2 bg-orange-v-400 rounded-full)",
      },
    },
  ];

  // :fix: linkWidth is still incorrect on first render most times
  function getLinkWidth(ctx: HTMLDivElement) {
    const linkWidth = ctx.clientWidth;
    const linkWidthWithoutTextSpan = linkWidth - ctx.querySelector("span")!.clientWidth;

    ctx.style.setProperty("--linkWidth", `${linkWidth}px`);
    ctx.style.setProperty("--linkWOTS", `${linkWidthWithoutTextSpan}px`); // linkWOTS - link width without text span

    /* 
      This is neccessary because by the time the current ctx loads,
      the child elements may not have been fully rendered, causing
      the element's clientWidth to be incorrectly calculated.
    */
    function update() {
      const textSpan = ctx.querySelector("span")!;
      const textSpanWidth = textSpan.clientWidth;
      ctx.style.setProperty("--linkWidth", `${linkWidthWithoutTextSpan + textSpanWidth}px`);
    }
    setTimeout(update, 800);
  }
</script>

<!-- footer nav -->
<footer class="fixed bottom-0 left-0 w-screen z-100" bind:clientHeight={footerHeight}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="fixed z-1  bottom-[2.25rem] right-4 inline-flex w-15 h-15 items-center p-4 justify-center rounded-full bg-grey ring-2 ring-secondaryGreen ring-offset-4"
    on:click={() => goto("/report")}
  >
    <RoadHeroLogo />
  </div>

  <nav class="bg-base-100 s-flex-between  bg-primaryBlue  text-white transition">
    {#each footerLinks as { path, name, classes }}
      {@const currentPathActive = $page.url.pathname === path}

      <Link href={path} class="mx-auto block py-3">
        <div
          use:getLinkWidth
          class={clsx(
            "transition-all duration-250 px-4 py-2 s-flex-start-center text-white rounded-10",
            currentPathActive
              ? "bg-secondaryGreen gap-1 w-[var(--linkWidth)]"
              : "w-[var(--linkWOTS)]"
          )}
        >
          <!-- icon wrapper -->
          <div class={clsx("flex relative", !currentPathActive && classes.wrapper)}>
            <div
              class={clsx("text-xl relative", currentPathActive ? classes.fill : classes.line)}
            />
          </div>

          <!-- page link name -->
          <span
            class={clsx(
              "block text-xs opacity-0 transition ease-[ease-out]",
              currentPathActive ? "duration-300" : "duration-50"
            )}
            class:opacity-100={currentPathActive}
          >
            {name}
          </span>
        </div>
      </Link>
    {/each}
  </nav>
</footer>
