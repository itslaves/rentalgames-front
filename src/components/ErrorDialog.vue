<template>
  <div>
    <v-dialog
      v-model="value"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          <slot name="title"></slot>
        </v-card-title>

        <v-card-text>
          <slot name="content"></slot>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="$emit('input', false)"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    timeout: {
      type: Number,
      default: 3000,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
  }),
  updated() {
    if (this.value) {
      setTimeout(() => {
        this.$emit('input', false);
      }, this.timeout);
    }
  },
};
</script>
<style scoped>
</style>
