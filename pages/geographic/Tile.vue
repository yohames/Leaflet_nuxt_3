<script setup>
import "vue-leaflet-markercluster/dist/style.css";
import L from "leaflet";
import { LMarkerClusterGroup } from "vue-leaflet-markercluster";

globalThis.L = L;
const iconSize = ref([50, 50]);
const markerLocation = ref([9.21322, 38.559482]);
const iconUrl = "https://static.thenounproject.com/png/2738999-200.png";
</script>
<template>
  <div class="w-[100%] h-[80vh] flex flex-col gap-y-5 mx-auto my-auto mt-10">
    <ClientOnly>
      <LMap
        ref="mapRef"
        :zoom="6"
        :center="[9.21322, 38.559482]"
        :use-global-leaflet="true"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
        <!-- <LTileLayer
            url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="ArcGIS"
            layer-type="overlay"
            name="Satelite"
            :detect-retina="true"
          /> -->
        <LTileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
          attribution="&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href='https://www.stadiamaps.com/' target='_blank'>Stadia Maps</a> &copy; <a href='https://openmaptiles.org/' target='_blank'>OpenMapTiles</a> &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          layer-type="overlay"
          name="Stadia Satelite"
          :options="{ ext: 'png' }"
          :max-zoom="20"
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
    </ClientOnly>
  </div>
</template>

<style scoped></style>
