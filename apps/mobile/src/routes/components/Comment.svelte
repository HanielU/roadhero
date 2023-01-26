<script lang="ts">
  // import { pb } from "@packages/api/src/context";
  import { pb } from "$lib/stores/pocketbase";

  import { Record } from "pocketbase";
  import { onMount } from "svelte";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";

  dayjs.extend(relativeTime);
  pb.autoCancellation(false);
  let liked = false;
  const like = () => {
    liked = !liked;
  };

  export let commentId: string;

  let comment = {
    content: "",
    created: "",
    upvotes: {},
    report: "",
    user: "",
    expand: { user: { username: "", avatar: "" } },
  };
  let url: string;
  onMount(async () => {
    comment = await pb.collection("comments").getOne(commentId, {
      expand: "user",
    });
    const user = await pb.collection("users").getOne(comment?.user as string);

    url = pb.getFileUrl(user, comment.expand?.user?.avatar);
    console.log("comment report Id", comment.report);
    console.log("url", url);
  });

  // function getFileUrl(media: string) {
  // let url = pb.getFileUrl(comment as unknown as Record, comment.expand?.user?.avatar);
  // console.log("url", url);

  //   return url;
  // }
</script>

<div class="flex space-x-6 p-3  bg-white rounded-lg m-2 max-h-200px">
  <div>
    <div
      class=" square-50px rounded-full bg-center bg-no-repeat bg-cover"
      style:background-image="url({url})"
    />
  </div>
  <div>
    <div class="font-semibold">{comment.expand?.user?.username}</div>
    <div class="max-h-70px overflow-auto w-55">
      {comment.content}
    </div>
    <div class="flex justify-between mt-4 text-sm opacity-70">
      <div>{dayjs(comment.created).fromNow()}</div>
      <div>{Object.entries(comment.upvotes).length} upvotes</div>
    </div>
  </div>
  <div class="flex items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="{liked
        ? 'i-ion-md-thumbs-up'
        : 'i-icon-park-outline-thumbs-up'} text-xl bg-secondaryGreen"
      on:click={like}
    />
  </div>
</div>
