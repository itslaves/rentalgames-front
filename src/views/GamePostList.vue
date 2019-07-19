<template>
  <v-card>
    <v-toolbar>
      <v-text-field prepend-cion="search" placeholder="검색어를 입력하세요." hide-details single-line />
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-subheader>상세 검색</v-subheader>
      <v-list-group
        v-for="filter in filters"
        :key="filter.title"
        v-model="filter.active"
        :prepend-icon="filter.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ filter.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-list-tile v-for="item in filter.items" :key="item.title" @click="() => {}">
          <v-list-tile-action v-if="item.checked != null">
            <v-checkbox v-model="item.checked" />
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action v-if="item.action != null">
            <v-btn icon ripple>
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
    <v-list three-line>
      <v-subheader>대여 목록</v-subheader>
      <template v-for="(post, index) in posts">
        <v-divider
          v-if="index > 0"
          inset
          :key="index"
        ></v-divider>
        <v-list-tile
          :key="post.title"
          avatar
          @click="() => {}"
        >
          <v-list-tile-avatar tile>
            <img :src="post.image">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="post.title" />
            <v-list-tile-sub-title v-html="post.price" />
            <v-list-tile-sub-title v-html="post.location" />
          </v-list-tile-content>

          <v-list-tile-action>
            <v-list-tile-action-text>{{ post.rating }} rating</v-list-tile-action-text>
            <v-list-tile-action-text>{{ post.reviews }} reviews</v-list-tile-action-text>
            <v-list-tile-action-text>{{ post.user }}</v-list-tile-action-text>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      filters: [
        {
          icon: 'category',
          title: '카테고리',
          items: [
            {
              title: '롤플레잉',
              checked: false,
            },
            {
              title: '심리',
              checked: false,
            },
            {
              title: '퍼즐',
              checked: false,
            },
          ],
        },
        {
          icon: 'payment',
          title: '가격',
          items: [
            {
              title: '1만원 이하',
              checked: false,
            },
            {
              title: '2~3만원',
              checked: false,
            },
            {
              title: '3~5만원',
              checked: false,
            },
            {
              title: '5만원 이상',
              checked: false,
            },
          ],
        },
        {
          icon: 'person',
          title: '인원',
          items: [
            {
              title: '2~3명',
              checked: false,
            },
            {
              title: '3~5명',
              checked: false,
            },
            {
              title: '5~7명',
              checked: false,
            },
            {
              title: '7명 이상',
              checked: false,
            },
          ],
        },
        {
          icon: 'location_on',
          title: '장소',
          items: [
            {
              icon: 'my_location',
              title: '서울시 서초구',
              action: () => {},
            },
          ],
        },
      ],
      posts: [
        {
          image: 'https://image.fmkorea.com/files/attach/new/20180324/486616/16502788/990931994/80c1d9dbae8236da6cc6039ad0c911d1.jpg',
          title: '부루마블',
          price: 3000,
          location: '서울시 강서구',
          rating: 4.5,
          reviews: 5,
          user: '홍길동',
        },
        {
          image: 'https://image.fmkorea.com/files/attach/new/20180324/486616/16502788/990931994/80c1d9dbae8236da6cc6039ad0c911d1.jpg',
          title: '부루마블',
          price: 3000,
          location: '서울시 강서구',
          rating: 4.5,
          reviews: 5,
          user: '홍길동',
        },
        {
          image: 'https://image.fmkorea.com/files/attach/new/20180324/486616/16502788/990931994/80c1d9dbae8236da6cc6039ad0c911d1.jpg',
          title: '부루마블',
          price: 3000,
          location: '서울시 강서구',
          rating: 4.5,
          reviews: 5,
          user: '홍길동',
        },
      ],
    };
  },
};
</script>
