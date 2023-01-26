<script lang="ts">
  import profilePicture from "$lib/assets/img/profile.jpg";
  import roadheroLogo from "$lib/assets/img/roadheroLogo.png";
  import type { BaseModel, Record } from "pocketbase";
  import { currentUser } from "$lib/stores";
  import { goto } from "$app/navigation";
  import { iconType, modalState } from "$lib/stores";
  import { onMount } from "svelte";
  import { pb } from "@packages/api/src/context";
  // import badRoad from "$lib/assets/img/bad-roads.jpeg";
  // import RoadHeroLogo from "../components/RoadHeroLogo.svelte";
  // import { onDestroy, onMount } from "svelte";
  // import { isCollide } from "$lib/utils";
  // import clsx from "clsx";

  // let header: Element;
  // let headerCollides: boolean;
  // let showNotifModal = false;

  // // using the "#app" div instead of "body" because overflow is set to hidden on the body
  // // therefore the scroll event has no effect on the body, but works on "#app"
  // onMount(() => document.querySelector("#app")!.addEventListener("scroll", handleScroll));

  // onDestroy(() => document.querySelector("#app")!.removeEventListener("scroll", handleScroll));

  // function handleScroll() {
  //   if (!header) return;
  //   headerCollides = isCollide(header, document.querySelector("#container")!);
  // }
  let user: Record;
  let id = $currentUser?.id as string;
  let avatar: string;
  console.log(id);

  onMount(async () => {
    const user = await pb.collection("users").getOne(id);

    avatar = pb.getFileUrl(user, user?.avatar);
    console.log(user, avatar);
  });

  const signOut = () => {
    // "logout" the last authenticated model
    pb.authStore.clear();
    goto("/welcome");

    $modalState = {
      title: "Sign Out",
      msg: "You have been logged out successfully",
      icon: iconType.success,
      buttons: [
        {
          text: "OK",
          handler: () => {
            $modalState = {
              title: "",
              msg: "",
              icon: "",
              buttons: [],
            };
          },
        },
      ],
    };
  };
</script>

<!-- <div w-full>
  <div
    class={clsx(" sticky top-0 p-4 bg-white z-2 m-2 w-full", headerCollides && "shadow-lg")}
    bind:this={header}
  >
    <div class="text-xl mx-auto w-fit border-b-2 border-secondaryGreen">Your Reports</div>
  </div>

  <div class="w95% flex flex-col p4 items-center justify-center mx-auto space-y-4" id="container">
    <div class="h30 w-full items-center flex rounded-lg  p4 bg-white justify-around ">
      <div class="justify-start h-full w-30% ring rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div class="text-sm max-h-[60px] overflow-hidden text-ellipsis">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv
        </div>
        <div class="flex justify-around">
          <div class="square-25px bg-primaryBlue" />
          <div class="square-25px bg-primaryBlue" />
          <div class="square-25px bg-primaryBlue" />
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>
  </div>
</div> -->

<div
  class="text-2xl text-white h80 w-screen 
  flex flex-col justify-center items-center bg-primaryBlue"
>
  <div
    class="bg-center bg-no-repeat bg-cover square-20 rounded-full mx-auto ring-secondaryGreen ring-2 ring-offset-2"
    style:background-image="url({avatar})"
  />

  <div class="pt7 pb-2 text-xl max-w-80 flex items-center space-x-2xl">
    {$currentUser?.model.username}
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src={roadheroLogo}
      alt="Profile Picture"
      class="rounded-full w5 h5 mx-2 ring-secondaryGreen ring inline ring-offset"
    />
  </div>

  <div class="text-sm text-grey opacity-50">{$currentUser?.email}</div>

  <div
    class="flex border border-2 p-2 rounded-lg text-sm mt-6 border-secondaryGreen text-secondaryGreen space-x-2"
  >
    <div class="i-ic-outline-mode-edit text-lg" />
    <div>Edit profile</div>
  </div>
</div>

<div class="flex flex-col items-center space-y-10 p-4 pt-15">
  <div class="w-85% shadow rounded-lg h-65px flex items-center bg-white">
    <div class="i-ion-settings-outline mx-4 w-15%" />
    <div class="fw300">Settings</div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="w-85% shadow rounded-lg h-65px flex items-center bg-white text-red"
    on:click={signOut}
  >
    <div class="i-ion-ios-log-out mx-4 w-15%" />
    <div class="fw300">Log Out</div>
  </div>

  <div
    class="w-70% shadow rounded-lg h-80px flex items-center justify-center bg-secondaryGreen text-white"
  >
    <div class="text-lg fw385">Report a bug</div>
  </div>
</div>

<div class="version my-10 fw100 text-[#D1D1D1] flex justify-center">version 0.1</div>
