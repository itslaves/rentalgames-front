<template>
  <v-card class="mx-auto" max-width="600" tile>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0" cols="12">
          <v-avatar class="profile" color="grey" size="164" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">홍길동</v-list-item-title>
              <v-list-item-subtitle>보드게임을 매우 좋아하는 사람입니다.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
    <v-tabs v-model="tab" background-color="deep-purple accent-4" class="elevation-2" dark grow>
      <v-tabs-slider></v-tabs-slider>
      <v-tab key="profile" href="#profile">
        개인 정보
      </v-tab>
      <v-tab key="history" href="#history">
        대여 내역
      </v-tab>
      <v-tab key="qna" href="#qna">
        문의 내역
      </v-tab>
      <v-tab-item key="profile" value="profile">
        <v-card flat tile>
          <v-list>
            <v-list-item>
              <v-list-item-title>닉네임</v-list-item-title>
              <v-list-item-subtitle>홍길동</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>이메일</v-list-item-title>
              <v-list-item-subtitle>somebody@gmail.com</v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-title>성별</v-list-item-title>
              <v-list-item-subtitle>남성</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>생년월일</v-list-item-title>
              <v-list-item-subtitle>1970.07.04</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-tab-item>
      <v-tab-item key="history" value="history">
        <v-card flat tile>
          <v-data-table
            :headers="rentalHistoryHeaders"
            :items="rentalHistory"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item key="qna" value="qna">
        <v-card flat tile>
          <v-data-table
            :headers="qnaHistoryHeaders"
            :items="qnaHistory"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      rentalHistoryHeaders: [
        {
          text: '날짜',
          sortable: true,
          value: 'datetime',
        },
        { text: '이름', value: 'title' },
        { text: '대여 기간', value: 'range' },
        { text: '대여 비용', value: 'cost' },
      ],
      rentalHistory: [
        {
          datetime: '2019-09-10 17:00:00',
          title: '보드게임',
          range: '2019-09-11 ~ 2019-09-14',
          cost: 9800,
        },
        {
          datetime: '2019-09-09 17:00:00',
          title: '보드게임',
          range: '2019-09-10 ~ 2019-09-14',
          cost: 5400,
        },
      ],
      qnaHistoryHeaders: [
        {
          text: '날짜',
          sortable: true,
          value: 'datetime',
        },
        { text: '제목', value: 'title' },
        { text: '작성자', value: 'writer' },
      ],
      qnaHistory: [
        {
          datetime: '2019-09-10 17:00:00',
          title: '질문',
          writer: '홍길동',
        },
      ],
    };
  },
};
</script>
