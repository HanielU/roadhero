<script lang="ts">
  import { goto } from "$app/navigation";
  import { iconType, modalState } from "$lib/stores";
  import { currentUser } from "$lib/stores";
  import { pb } from "@packages/api/src/context";
  import { onMount } from "svelte";

  const cities = [
    { id: 1, name: "Wuse 2" },
    { id: 2, name: "Apo" },
    { id: 3, name: "Gwarimpa" },
    { id: 3, name: "Maitama" },
  ];
  let data = {
    description: "",
    location: {},
    user: $currentUser?.id,
    media: "",
  };

  const submitReport = async () => {
    const record = await pb.collection("reports").create(data);
    $modalState = {
      title: "Report Submitted",
      msg: "Your report has been submitted successfully",
      icon: iconType.success,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            window.history.back();
            $modalState.title = "";
          },
        },
      ],
    };
  };

  onMount(() => {
    const mbScript = document.createElement("script");
    mbScript.src = "/god-abeg.js";
    mbScript.defer = true;
    mbScript.id = "search-js";

    document.head.appendChild(mbScript);

    const autofillScript = document.getElementById("search-js")!;
    autofillScript.onload = function () {
      mapboxsearch.autofill({
        accessToken:
          "pk.eyJ1Ijoia2luZ2ltb2giLCJhIjoiY2xhdjVmNWIwMDJnazNxc2o3aW14bHJseCJ9._HBlCjjOJ5fD-y6OoRqI0Q",
      });
    };
  });
</script>

<!-- a reporting page with support for video and description -->

<div id="body" />
<divi class="p-6 flex space-x-2 items-center bg-primary-blue text-white">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <button on:click={() => window.history.back()}>
    <div class="i-material-symbols-arrow-back-ios-new-rounded text-xl" /></button
  >
  <div class="text-[1.25rem] ">Make a Report</div>
</divi>

<div class="p-6">
  <div class="">Report location</div>
  <div class="py-3 space-y-5">
    <input
      type="text"
      class="w-full bg-gray-200 p-4 rounded-lg outline-none"
      placeholder="Address"
      required
      autocomplete="street-address"
    />

    <select
      name="city"
      id="city"
      class="w-full p-4 rounded-lg bg-gray-200 border-3 outline-none"
      autocomplete="address-level2"
    >
      <option selected>Select your City</option>
      {#each cities as city}
        <option value={city.id}>{city.name}</option>
      {/each}
    </select>
  </div>

  <div class="py-3">
    <div class="mb-2">Upload a photo or video of the issue</div>

    <label for="media">
      <div class="flex justify-center items-center bg-gray-200 rounded-lg h-200px">
        <div class="i-material-symbols-add-a-photo text-5xl bg-secondaryGreen" />
      </div>
    </label>

    <input
      type="file"
      id="media"
      multiple
      accept="image/png, image/jpg, image/gif, image/jpeg, video/mp4, video/x-ms-wmv, video/quicktime, video/3gpp "
      class="hidden"
      bind:files={data.media}
    />
    Media uploaded: {data.media.length}
  </div>

  <div class="py-3">
    <div class="mb-2">Report a problem</div>
    <textarea
      class="bg-transparent outline-none border border-gray w-full p-3 h-150px rounded-lg"
      placeholder="Describe the issue extensively"
      bind:value={data.description}
    />
  </div>

  <button
    on:click={submitReport}
    class="w-full bg-secondaryGreen text-white flex justify-center items-center p-3 rounded-lg"
    >Submit</button
  >
</div>
