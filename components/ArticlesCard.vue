<template>
  <div class="articles-card">
    <NuxtLink :to="`/article/${data.id}`">
      <img
        :src="
          data.image
            .replace('http://lorempixel.com', 'https://loremflickr.com')
            .replace('http://placeimg.com', 'https://loremflickr.com')
        "
        alt=""
      />
    </NuxtLink>
    <div ref="title" :class="showAll ? 'show-all' : ''" class="text">
      {{ data.title }} {{ data.preview }}
    </div>
    <button v-if="showReadMore" class="read-more" @click="showAll = !showAll">
      {{ showAll ? 'Hide' : 'Read more' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { Article } from '~/types/Article'

const title = ref(0)
const showAll = ref(false)
const props = defineProps({
  data: { type: Object as PropType<Article>, required: true },
})

const showReadMore = computed<boolean>(() => title.value.scrollHeight > 72)
</script>

<style scoped lang="scss">
.articles-card {
  width: 280px;
  img {
    width: 280px;
    height: 210px;
  }
  .text {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .text.show-all {
    overflow: visible;
    height: auto;
    display: block;
  }
  .read-more {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 12px;
    color: hsla(273, 100%, 87%, 1);
    height: 24px;
  }
}
</style>
