<template lang="pug">
  v-content.pa-4
    .display-1 GPU-Honey-Gems
    .content-list-container.pa-2
      .group.py-2
        .title Geometry Buffer
        .item-list.pl-2
          .subtitle-2.link(@click="$router.push({name: 'cubeGeoBuffer'})") Cube
          .subtitle-2.link(@click="$router.push({name: 'fractal'})") Fractal Tree
          .subtitle-2.link(@click="$router.push({name: 'instancing'})") Instancing   
      
      .group.py-2
        .title Animation
        .item-list.pl-2
          .subtitle-2.link(@click="$router.push({name: 'space'})") Stars    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    //
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.link {
  &:hover {
    color: #1867c0 !important;
  }
}
</style>

