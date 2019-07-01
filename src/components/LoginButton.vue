<template>
  <div>
    <v-btn :href="url" icon>
          <img class="img" :src="image" :alt="vendor">
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LoginButton',
  props: {
    vendor: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  .img {
    width: 180px;
    height: 45px;
  }
</style>
