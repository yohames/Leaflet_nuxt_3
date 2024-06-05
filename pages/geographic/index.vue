<script setup>
const center = ref([47.21322, -1.559482]);
const zoom = ref(6);
const mapRef = ref(null);
const markerLocation = ref([0, 0]);

const flyOver = () => {
  const randomLong = Number((Math.random() * 180 - 90).toPrecision(7));
  const randomLat = Number((Math.random() * 180 - 90).toPrecision(7));
  const map = mapRef.value?.leafletObject;
  map.flyTo([randomLat, randomLong], 5);
  markerLocation.value = [randomLat, randomLong];
};
</script>
<template>
  <div class="w-[100%] h-[80vh] flex flex-col gap-y-5 mx-auto my-auto mt-10">
    <div class="flex gap-x-10">
      <button
        @click="flyOver"
        class="px-10 py-1 text-xl border-2 border-gray-300 rounded-md hover:bg-gray-100"
      >
        Fly Over
      </button>
    </div>
    <LMap
      ref="mapRef"
      :zoom="6"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="markerLocation" draggable />
    </LMap>
  </div>
</template>

<style scoped></style>
