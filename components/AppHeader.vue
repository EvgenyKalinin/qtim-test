<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink to="/" aria-current="page" class="logo logo--light">
          <img src="../assets/images/qtim.svg" alt="" />
        </NuxtLink>
        <div class="header__right">
          <nav class="nav">
            <NuxtLink href="/" class="hover">About</NuxtLink>
            <NuxtLink href="/" class="hover">Works</NuxtLink>
          </nav>
          <div class="actions">
            <div class="burger">
              <span></span>
              <span></span>
            </div>
            <div tabindex="0" class="select">
              <div class="selected">
                <div class="selected-value">
                  <img src="~/assets/images/united_kingdom.svg" alt="" />
                </div>
              </div>
            </div>
            <button class="btn btn--main">
              <span>Let’s work</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
