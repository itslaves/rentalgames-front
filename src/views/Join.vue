<template>
  <v-form v-model="valid" lazy-validation>
    <v-container>
      <v-img src="https://topturf.net/wp-content/uploads/2016/12/Gradient-Gray-box.png">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading">회원 가입</div>
            <div class="body-1">보드게임 대여 서비스에 오신 것을 환영합니다.</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-layout wrap>
        <v-flex xs12 md12>
          <v-text-field label="프로필" disabled/>
          <v-img
            :src="profileImage"
            v-show="profileImage !== ''"
            height="150"
          />
          <image-file-picker :onImageFilePicked="handleImageFileChanged"></image-file-picker>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field clearable label="이메일" v-model="email"/>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field clearable label="닉네임" v-model="nickname"/>
        </v-flex>
        <v-flex xs12 md6>
          <v-select label="성별" :items="genderOptions" v-model="gender" />
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field label="나이" type="number" v-model="age"/>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-btn outline color="primary">확인</v-btn>
        <v-btn outline>취소</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
import ImageFilePicker from "@/components/ImageFilePicker";
export default {
  components: {
    ImageFilePicker,
  },
  props: {
    email: {
      type: String,
      default: "",
    },
    nickname: {
      type: String,
      default: "",
    },
    profileImage: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      valid: false,
      gender: "",
      genderOptions: ["남성", "여성"],
      age: null,
    };
  },
  methods: {
    handleImageFileChanged (contents) {
      this.profileImage = contents;
    }
  }
};
</script>
