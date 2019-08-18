<template>
  <v-container
    fill-height
    style="height: calc(80vh - 58px);"
  >
    <v-layout align-center>
      <v-flex text-xs-center>
        <h1 class="display-2 primary--text">{{title}}</h1>
        <p>{{details}}</p>
        <v-btn
          @click="$emit('click')"
          outlined
          color="primary"
        >
          {{buttonText}}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  data: () => ({
  }),
};
</script>
<style scoped>
</style>
