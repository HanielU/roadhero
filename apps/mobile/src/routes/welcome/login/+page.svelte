<script lang="ts">
  // import System from "svelte-system-info";
</script>

<div class="flex flex-col items-center space-y-5 pt-15">
  <div>
    <div class="text-xl w-fit mx-auto">Continue to sign up</div>
    <div class="text-sm opacity-50 p-3">If you already have an account, we'll log you in.</div>
  </div>

  <!-- {#if System.OSName == "iOS"}
    <div class="w-85% rounded-lg p-4 flex items-center bg-grey">
      <div class="i-logos-apple mx-4 w-15%" />
      <div class="fw300">Continue with Apple</div>
    </div>
  {/if}

  <div class="w-85% rounded-lg p-4  flex items-center bg-grey">
    <div class="i-logos-google-icon mx-4 w-15%" />
    <div class="fw300">Continue with Google</div>
  </div>
  <div class="w-85% rounded-lg p-4 flex items-center bg-grey">
    <div class="i-logos-facebook mx-4 w-15%" />
    <div class="fw300">Continue with Facebook</div>
  </div> -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <a class="w-85% rounded-lg p-4 flex items-center bg-grey" href="/welcome/login/email">
    <div class="i-ic-round-email mx-4 w-15%" />
    <div class="fw300">Continue with E-Mail</div>
  </a>

  <div class="w-85% text-[.75rem] text-center pt-40%">
    By continuing, you agree to RoadHero's <span class=" text-secondaryGreen underline"
      >Terms of Service</span
    >
    and <span class="text-secondaryGreen underline">Privacy Policy</span>
  </div>
</div>

<!-- COntinue with E-Mail Page -->
<!-- <div class="p-6">
  <div class="py-6 flex space-x-2 items-center">
    <div class="i-material-symbols-arrow-back-ios-new-rounded text-xl " />
    <div class="text-[1.25rem] ">Continue with E-Mail</div>
  </div>

  <div class="opacity-50">
    We'll check if you have an account, and help create one if you don't.
  </div>

  <div class="py-6">
    <div class="font-500">E-Mail</div>

    <input
      type="text"
      class="bg-transparent outline-none border w-full p-3 rounded-lg"
      placeholder="roadhero@example.com"
    />
  </div>

  <div class="w-full bg-secondaryGreen text-white flex justify-center items-center p-3 rounded-lg">
    Continue
  </div>
</div> -->

<!-- <div class="p-6">
  <div class="py-6 flex space-x-2 items-center">
    <div class="i-material-symbols-arrow-back-ios-new-rounded text-xl " />
    <div class="text-[1.25rem]">Continue to Road Hero</div>
  </div>

  <div class="opacity-50">
    Once you enter the code sent your email, $email, you'll be all logged in
  </div>

  <div class="py-6">
    <div class="font-500">Code</div>

    <input
      type="text"
      class="bg-transparent outline-none border w-full p-3 rounded-lg text-lg"
      placeholder="Enter code"
    />
  </div>

  <div class="w-full bg-secondaryGreen text-white flex justify-center items-center p-3 rounded-lg">
    Continue
  </div>

  <div class="py-4">
    <span class="opacity-50"> Didn't get the code? </span><span
      class="text-secondaryGreen underline">Resend code</span
    >
  </div>
</div> -->
