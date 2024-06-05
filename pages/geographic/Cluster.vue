<script setup>
import "vue-leaflet-markercluster/dist/style.css";
import L from "leaflet";
import { LMarkerClusterGroup } from "vue-leaflet-markercluster";

globalThis.L = L;
const iconSize = ref([25, 41]);
const markerLocation = ref([47.21322, -1.559482]);
const iconUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23074057' stroke-linecap='round' stroke-width='2'%3E%3Cpath stroke-dasharray='56' stroke-dashoffset='56' d='M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.5s' values='56;0'/%3E%3C/path%3E%3Cpath d='M12 4v0M20 12h0M12 20v0M4 12h0' opacity='0'%3E%3Cset attributeName='opacity' begin='0.9s' to='1'/%3E%3Canimate fill='freeze' attributeName='d' begin='0.9s' dur='0.2s' values='M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2'/%3E%3CanimateTransform attributeName='transform' dur='30s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'/%3E%3C/path%3E%3C/g%3E%3Ccircle cx='12' cy='12' r='0' fill='%23074057' fill-opacity='0'%3E%3Cset attributeName='fill-opacity' begin='0.6s' to='1'/%3E%3Canimate fill='freeze' attributeName='r' begin='0.6s' dur='0.2s' values='0;4'/%3E%3C/circle%3E%3C/svg%3E";
</script>
<template>
  <div class="w-[100%] h-[80vh] flex flex-col gap-y-5 mx-auto my-auto mt-10">
    <LMap
      ref="mapRef"
      :zoom="6"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="true"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarkerClusterGroup>
        <LMarker
          :lat-lng="[markerLocation[0] + i / 10, markerLocation[1] + i / 10]"
          draggable
          v-for="i in 10"
        >
          <LIcon :icon-url="iconUrl" :icon-size="iconSize" />
          <LPopup>
            <div
              class="-ml-5 -mr-6 -my-3 max-w-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </LPopup>
        </LMarker>
      </LMarkerClusterGroup>
      <LControlLayers position="topright" />
    </LMap>
  </div>
</template>

<style scoped></style>
