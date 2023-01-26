<script lang="ts">
  import { goto } from "$app/navigation";
  import { modalState, iconType } from "$lib/stores/index";
  import { pb } from "@packages/api/src/context";

  let files: any;
  let user = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatar: "",
  };

  const signup = async () => {
    try {
      const createUser = await pb.collection("users").create(user);
      console.log(createUser);
      if (createUser) {
        $modalState = {
          title: "Sign Up Successful",
          msg: `You have successfully signed up.`,
          buttons: [
            {
              text: "Continue",
              handler: () => {
                $modalState = {
                  title: "",
                  msg: "",
                  buttons: [],
                  icon: "",
                };
              },
            },
          ],
          icon: iconType.success,
        };
        // const verificationEmail = await pb.collection("users").requestVerification(user.email);
        // goto("/welcome/login/email/verify");
        goto("/welcome/login/email");
      }
    } catch (error: any) {
      // let errors: [string, string][] = Object.entries(error.data.data);

      // for (let i = 0; i < errors.length; i++) {
      //   errors.push(errors[i][1]);
      //   console.log(errors[i][1]);
      // }
      console.log("error:", error);

      $modalState = {
        title: error.message,
        msg: "Try again. Something went wrong.",
        buttons: [
          {
            text: "Continue",
            handler: () => {
              $modalState = "";
            },
          },
        ],
        icon: iconType.error,
      };
    }
  };
</script>

<div class="p-6">
  <div class="py-6 flex space-x-2 items-center">
    <a href="/welcome/login/email">
      <div class="i-material-symbols-arrow-back-ios-new-rounded text-xl " /></a
    >
    <div class="text-[1.25rem]">Sign Up to Road Hero</div>
  </div>

  <div class="space-y-5">
    <div flex justify-between>
      <div class="w-2/3">
        <label class="font-500" for="email">Username</label>

        <input
          type="text"
          class="bg-transparent outline-none border w-full p-3 mt-3 rounded-lg"
          placeholder="RoadHeroKing"
          bind:value={user.username}
        />
      </div>
      <div class="w-1/5 flex flex-col items-center">
        <label class="font-500" for="avatar">Avatar</label>
        <label for="avatar">
          <div
            class="{user.avatar == ''
              ? 'bg-primary-blue'
              : 'bg-secondaryGreen'} square-50px rounded-full flex justify-center items-center mt-2"
          >
            <div class="i-ep-picture-rounded rounded-full bg-white text-3xl" />
          </div>
        </label>
        <!-- <input
          type="file"
          class="bg-transparent outline-none border w-full p-3 rounded-lg"
          bind:file={user.avatar}
        /> -->

        <input type="file" id="avatar" accept=".jpg, .jpeg, .png" hidden bind:files={user.avatar} />
      </div>
    </div>
    <div>
      <label class="font-500" for="email">E-Mail</label>

      <input
        type="email"
        class="bg-transparent outline-none border w-full p-3 rounded-lg"
        placeholder="roadhero@example.com"
        bind:value={user.email}
      />
    </div>

    <div>
      <label for="password" class="font-500">Password</label>

      <input
        type="password"
        class="bg-transparent outline-none border w-full p-3 rounded-lg"
        placeholder="xxxxxxx"
        bind:value={user.password}
      />
    </div>

    <div>
      <label for="password" class="font-500">Confirm password</label>

      <input
        type="password"
        class="bg-transparent outline-none border w-full p-3 rounded-lg"
        placeholder="xxxxxxx"
        bind:value={user.passwordConfirm}
      />
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button
      class="w-full bg-secondaryGreen text-white flex justify-center items-center p-3 rounded-lg"
      on:click={signup}
    >
      Sign Up
    </button>

    <div class="flex justify-between text-sm text-secondaryGreen underline">
      <a href="/welcome/login/email/new">Don't have an account</a>
      <a>Forgot password?</a>
    </div>
  </div>
</div>
