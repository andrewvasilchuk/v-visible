<template>
  <div id="target">
    <section id="simple" v-visible="false"></section>
    <div style="color: red" v-visible="false"></div>
    <div :style="{ color: 'red' }" v-visible="false"></div>
    <div :style="[{ color: 'red' }]" v-visible="false"></div>
  </div>
</template>
