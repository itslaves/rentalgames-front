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
      <v-text-field
        label="참고 링크"
        prepend-icon="link"
      />
      <image-file-picker></image-file-picker>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5" />
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-form>
</template>
<script>
import ImageFilePicker from '@/components/ImageFilePicker.vue';

export default {
  components: {
    ImageFilePicker,
  },
  data() {
    return {
      dueDateOpen: false,
      dueDate: new Date().toISOString().substring(0, 10),
    };
  },
};
</script>
