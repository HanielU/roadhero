<script lang="ts">
  import rhlogo from "$lib/assets/img/roadhero_white.png";
  import RoadHeroLogo from "./RoadHeroLogo.svelte";
  import welcome from "$lib/assets/img/welcome-1.png";
  import welcome2 from "$lib/assets/img/welcome-2.png";
  import welcome3 from "$lib/assets/img/welcome-3.png";

  // import Swiper core and required modules
  import { Pagination, Autoplay } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import { goto } from "$app/navigation";
</script>

<div class="flex flex-col items-center p-10 space-y-35 h-screen bg-primaryBlue">
  <div class="w-200px mt-20">
    <img src={rhlogo} alt="" />
  </div>

  <div w-full>
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay
    >
      <SwiperSlide>
        <img class="mb-10" src={welcome} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="mb-10" src={welcome2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="mb-10" src={welcome3} alt="" />
      </SwiperSlide>
    </Swiper>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="bg-secondaryGreen p-4 flex flex-col-items-center justify-center text-white rounded-lg w-90%"
    on:click={goto("/welcome/login")}
  >
    Get Started!
  </div>
</div>

<style>
  :root {
    --swiper-theme-color: #34bf42;
  }
</style>
