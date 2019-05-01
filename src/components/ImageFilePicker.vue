<template>
  <v-container class="pa-0">
    <v-text-field
      class="mr-1"
      label="이미지 파일 선택"
      @click="openImageFilePicker"
      v-model="imageName"
      prepend-icon="attach_file"
    ></v-text-field>
    <input
      type="file"
      style="display: none"
      ref="imageInput"
      accept="image/*"
      @change="handleImageFilePicked"
    />
  </v-container>
</template>
<script>
export default {
  props: {
    onImageFilePicked: Function,
  },
  data: function () {
    return {
      imageName: '',
      imageContents: '',
    };
  },
  created: function () {
    this.reader = new FileReader();
    this.reader.addEventListener("load", () => {
      this.imageContents = this.reader.result;
      if (this.onImageFilePicked) {
        this.onImageFilePicked(this.imageContents);
      }
    });
  },
  methods: {
    openImageFilePicker () {
      this.$refs.imageInput.click();
    },
    handleImageFilePicked (e) {
      if (e.target.files && e.target.files[0] !== undefined) {
        const targetFile = e.target.files[0];
        this.imageName = targetFile.name;
        this.reader.readAsDataURL(targetFile);
      } else {
        this.imageName = '';
        this.imageContents = '';
      }
    }
  },
};
</script>
