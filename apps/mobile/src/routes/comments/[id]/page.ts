import { pb } from "@packages/api/src/context";
// import { onMount } from "svelte";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  // console.log(params);
  const reportId = params.id;
  // fetch stuff here
  const comments = await pb.collection("comments").getFullList(100, {
    filter: `report = "${reportId}"`,
    expand: "user",
    sort: "-created",
  });
  console.log("Original List", comments);

  return {
    comments: comments,
  };
};
