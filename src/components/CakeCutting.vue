<template>
  <div>
    <div>
      <cake-chart v-bind:lines="text" v-bind:radius="radius"/>
    </div>
    <div>
      <div>
        <textarea v-model="text" placeholder="Enter list of x1 y1 x2 y2..." rows="5"/>
      </div>
      <div>
        <input type="text" v-model="radius" placeholder="Enter radius...">
      </div>
    </div>
  </div>
</template>

<script>
import CakeChart from "./CakeChart";
export default {
  components: { CakeChart },
  name: "CakeCutting",
  data() {
    return {
      text: "",
      radius: "500"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
