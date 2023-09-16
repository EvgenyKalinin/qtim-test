<template>
  <div class="main">
    <h1 class="title">{{ article.title }}</h1>
    <div>
      <img
        :src="
          article.image
            .replace('http://lorempixel.com', 'https://loremflickr.com')
            .replace('http://placeimg.com', 'https://loremflickr.com')
        "
        alt=""
      />
    </div>
    <div>
      <div class="about">About</div>
      <p class="description">{{ article.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types/Article'

const route = useRoute()
const { data: article }: Article = await useFetch<Article>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`,
)
</script>

<style scoped lang="scss">
.main {
  max-width: 1217px;
  margin: 120px auto;
  padding: 20px;
  .title {
    font-size: 84px;
    margin-bottom: 73px;
  }
  img {
    margin-bottom: 80px;
    width: 100%;
  }
  .about {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
  }
  .description {
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
  }
}
</style>
