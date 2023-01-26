<div class="h-350px pb-70px p-6 w-screen bg-white absolute bottom-0 z-10">
  <div class=" flex rounded-lg overflow-hidden">
    <div class="bg-secondaryGreen w-50px flex justify-between items-center">
      <div class="i-ri-search-line text-white mx-auto" />
    </div>
    <input
      class="px-5 py-3 bg-grey fw70 outline-none text-sm w-full"
      type="text"
      placeholder="Search location..."
    />
  </div>

  <!-- Location List and Suggestions -->
  <div class="mt-5 h-215px overflow-auto">
    {#each [...Array(5)] as element}
      <!-- Location Suggestion -->
      <div class="border-b-2 border-grey py-4 flex items-center space-x-4">
        <div class="i-ic-sharp-location-on text-2xl bg-gray" />
        <div>
          <div class="">Current Location</div>
          <div class="text-xs opacity-50">Kathmandu, Nepal</div>
        </div>
      </div>
    {/each}
  </div>
</div>
