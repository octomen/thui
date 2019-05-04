<template>
  <div class="themes-page">
    <h1 class="themes-title">{{ title }}</h1>
    <ul class="theme-list">
      <li v-for="theme in savedThemes" v-bind:key="theme.id" class="theme">
        <span class="theme__title">{{ theme.title }}</span>&nbsp;
        <span class="theme__description">{{ theme.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script src="./Themes.js"/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Themes.css"/>
