<script script lang="ts">
  import badRoad from "$lib/assets/img/bad-roads.jpeg";

  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import clsx from "clsx";
  import type { BaseModel, Record } from "pocketbase";
  import { onMount } from "svelte";
  import { currentUser } from "$lib/stores";
  import { goto } from "$app/navigation";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { pb } from "@packages/api/src/context";
  // import user from "@packages/api/src/router/routes/user";
  pb.autoCancellation(false);
  dayjs.extend(relativeTime);
  // type Report = {
  //   description: string;
  //   media: string[];
  //   comments: string[];
  //   upvotes: number;
  //   username: string;
  //   location: string;
  //   created: string;
  // };

  export let reportId: string;
  let liked = false;
  let commenting = false;
  let comment = "";
  let avatar: string;
  let report = {
    description: "",
    media: [],
    comments: "",
    upvotes: {} || 0,
    username: "",
    location: {},
    created: "",
    user: "",
    expand: {
      user: {
        username: "",
        avatar: "",
      },
      comments: {},
    },
  };

  // let report = {
  //   description: "",
  //   media: [],
  //   comments: [],
  //   upvotes: 0,
  //   username: "",
  //   location: "",
  //   created: "",
  // };
  // type ReportRecord = Record & Report;

  function getFileUrl(media: string) {
    let url = pb.getFileUrl(report as unknown as Record, media);
    // console.log("url", url);

    return url;
    // return pb.getFileUrl(report as ReportRecord, media);
  }

  // const cr = (record: Report) => record as ReportRecord;

  onMount(async () => {
    // report = await pb.collection("reports").getOne<Report>(reportId, { expand: "user" });
    report = await pb.collection("reports").getOne(reportId, { expand: "user, comments" });
    const user = await pb.collection("users").getOne(report?.user);
    avatar = pb.getFileUrl(user, user?.avatar);

    const comments = await pb
      .collection("comments")
      .getFullList(undefined, { filter: `report= "${reportId}"` });
    console.log("avatar", avatar);
    console.log("report", report);
    console.log("comments", comments.length);
    commentsLen = comments.length;
  });
  let commentsLen: number;

  let upvotes = Object.entries(report.upvotes)!;
</script>

<div class="w-full  max-h-550px rounded-3xl border p-4 shadow mb-6 flex flex-col bg-white">
  <div class="h-20% flex items-center mb-4">
    <div
      class="profilepic rounded-full square-10 bg-center bg-no-repeat bg-cover "
      style:background-image="url({avatar})"
    />

    <div class="mx-3">
      <div class="">{report.expand?.user?.username}</div>
      <div class="text-sm flex items-center text-secondaryGreen ">
        <div class="i-material-symbols-location-on-rounded inline-flex mr-1" />
        {report.location}
      </div>
    </div>

    <div class="ml-a place-self-start i-mingcute-more-1-line text-sm" />
  </div>

  <div class="h-65% space-y-2">
    <!-- Issue Description -->
    <div class="description max-h-60px overflow-auto text-ellipsis text-sm">
      {report.description}
    </div>

    <!-- Time Stamp -->
    <div class="text-[#0B2040] opacity-50 text-xs">{dayjs(report.created).fromNow()}</div>

    <!-- content wrapper -->
    <div class="rounded-3xl w-full h-full overflow-hidden max-h-175px h-1/2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <!-- {#each [...Array(4)] as media} -->
        {#each report.media as media}
          {@const url = getFileUrl(media)}
          {@const ext = url.split(".").pop()}
          <SwiperSlide>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-img-redundant-alt -->

            {#if ext == ("mp4" || "x-ms-wmv" || "quicktime" || "3gpp" || "x-msvideo" || "x-flv")}
              <video class="video h-200px w-full" controls>
                <track kind="captions" />
                <source src={url} type="" />
              </video>
            {:else}
              <div
                class="bg-center bg-cover bg-no-repeat h-200px "
                style:background-image="url({url})"
                alt="Image of Road Issue"
              />
            {/if}
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>
  </div>

  <!-- Card Footer -->
  <!-- has the upvotes(i.e appreciate), comments, etc -->
  <div class="h-15% flex space-x-6 text-lg items-center pt-4 text-[#0B2040]">
    <div
      class={clsx(liked && "text-secondaryGreen")}
      on:click={async () => {
        let userId = report.expand?.user?.username;
        console.log("userId", userId);

        liked = !liked;
        // const record = await pb.collection("reports").update(reportId, {
        //   upvotes: { userId: liked },
        // });
      }}
      on:keydown={() => {}}
    >
      {#if liked != true}
        <div class="i-icon-park-outline-thumbs-up" />
      {:else}
        <div class="i-ion-md-thumbs-up" />
      {/if}
    </div>

    <div
      class={clsx(commenting && "text-secondaryGreen")}
      on:click={() => {
        commenting = !commenting;
      }}
      on:keydown={() => {}}
    >
      <div class="i-material-symbols-comment-outline-rounded  " />
    </div>

    <div class="i-ion-share-social-outline" />
  </div>

  <!-- </div> -->

  <div class="pt-3 flex justify-between text-xs text-primaryBlue">
    <div class=" opacity-30">
      {upvotes.length} <span class="text-xs">thumbs-up</span>
    </div>
    <a href="/comments/{reportId}" class=" opacity-50">
      {#if commentsLen > 0}
        {commentsLen} comments{:else}No comments{/if}
    </a>
  </div>

  <!-- Comment section -->
  {#if commenting}
    <div class="w-full my-4 mx-auto">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="text-xs text-primaryBlue opacity-70 mb-3"
        on:click={() => {
          goto("/comments/" + reportId);
        }}
      >
        View comments
      </div>
      <div class="h-1px opacity-50 bg-[#E8E8E8] w-full" />
    </div>

    <div class="bg-grey w-full p-3 rounded-lg flex justify-between">
      <input
        type="text"
        class="bg-transparent w-70% outline-none "
        placeholder="Comment"
        bind:value={comment}
      />
      <div
        class="square-30px rounded-full bg-secondaryGreen flex justify-center items-center text-white"
      >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="i-mingcute-send-plane-line"
          on:click={async () => {
            try {
              const record = await pb.collection("comments").create({
                user: $currentUser?.id,
                report: reportId,
                upvotes: {},
                content: comment,
              });
              comment = "";
            } catch (error) {
              console.log("error", error);
              return { error: true };
            }
          }}
        />
      </div>
    </div>
  {/if}
</div>

<style>
  :root {
    --swiper-navigation-size: 20px;
    --swiper-theme-color: #36bf43;
  }
</style>
