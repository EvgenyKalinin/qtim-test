<template>
  <div class="main">
    <div>
      <h1 class="title">Articles</h1>
    </div>
    <div class="articles-grid">
      <template v-for="article in paginatedArticles" :key="article.id">
        <ArticlesCard :data="article" />
      </template>
    </div>
    <div class="pagination-block">
      <button v-if="page !== 1" class="btn prev-btn" @click="backPage">
        <img src="~/assets/images/arrow-left.svg" alt="" />
      </button>
      <button
        v-for="item in paginatedBtns"
        :key="item"
        class="btn"
        :class="item === page ? 'active-btn' : ''"
        @click="() => goToPage(item)"
      >
        {{ item }}
      </button>
      <button class="btn next-btn" @click="nextPage">
        <img src="~/assets/images/arrow-left.svg" alt="" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { range } from '~/utils/functions'
import type { Article } from '~/types/Article'

const { data: articles } = await useFetch<Article[]>(
  'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/',
)

const page: number = ref(1)
const perPage: number = 8
const visiblePages: number = 2

const paginatedArticles = computed<Article[]>(() =>
  articles.value.slice((page.value - 1) * perPage, page.value * perPage),
)

const maxPaginationNumber = computed<number>(() =>
  Math.ceil(articles.value.length / perPage),
)
const paginatedBtns = computed<number[]>(() => {
  if (!page.value) return []
  const visiblePagesArray = []

  for (let i = -visiblePages; i <= visiblePages; i++) {
    if (page.value - i <= 1) {
      return maxPaginationNumber.value >= 5
        ? range(1, 5)
        : range(1, maxPaginationNumber.value)
    }
    if (page.value + i >= maxPaginationNumber.value)
      return page.value - 5 <= 0
        ? range(1, maxPaginationNumber.value)
        : range(maxPaginationNumber.value - 4, maxPaginationNumber.value)

    visiblePagesArray.push(page.value + i)
  }

  return visiblePagesArray
})

const backPage = (): void => {
  if (page.value !== 1) {
    page.value -= 1
  }
}
const nextPage = (): void => {
  if (page.value !== Math.ceil(articles.length / perPage)) {
    page.value += 1
  }
}
const goToPage = (numPage: number): void => {
  page.value = numPage
}
</script>

<style scoped lang="scss">
.main {
  max-width: 1217px;
  margin: 120px auto;
  padding: 20px;

  .title {
    font-size: 84px;
    margin-bottom: 60px;
  }
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 44px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1200px) {
    .articles-grid {
      justify-items: center;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 870px) {
    .articles-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 600px) {
    .articles-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .pagination-block {
    display: flex;
    align-items: center;
    gap: 10px;

    .prev-btn {
      transform: scale(-1, 1);
    }
    .btn {
      width: 44px;
      height: 44px;
      background: hsla(0, 0%, 95%, 1);
      border-radius: 12px;
    }
    .btn:hover {
      background: hsla(0, 0%, 91%, 1);
    }
    .btn.active-btn {
      background: #101010;
      color: #fff;
    }
  }
}
</style>
