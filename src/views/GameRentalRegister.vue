<template>
  <v-form>
    <v-container>
      <v-autocomplete
        label="상품명"
        prepend-icon="games"
        required
      />
      <v-autocomplete
        label="지역"
        prepend-icon="place"
        required
      />
      <v-text-field
        label="가격"
        prepend-icon="payment"
        required
      />
      <v-menu
        v-model="dueDateOpen"
        transition="scale-transition"
        min-width="290px"
        offset-y
        full-width
        lazy
        :nudge-right="20"
        :nudge-bottom="10"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            label="대여 기간"
            hint="YYYY-MM-DD"
            persistent-hint
            prepend-icon="event"
            readonly
            v-model="dueDate"
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="dueDate"
          no-title
          @input="dueDateOpen = false"
        />
      </v-menu>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      dueDateOpen: false,
      dueDate: new Date().toISOString().substring(0, 10),
    };
  },
};
</script>
