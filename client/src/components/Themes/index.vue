<template>
  <div class="themes-page">
    <h1 class="themes-title">{{ title }}</h1>
    <ol class="theme-list">
      <li v-for="theme in savedThemes" v-bind:key="theme.id" class="theme">
        <div class="theme__author">{{ theme.author }}</div>
        <div class="theme__description">{{ theme.description }}</div>
        <div class="theme__speakers">
          <span class="theme__speakers-title">{{ speakersTitle }}</span>:&nbsp;
          <ul class="theme__speaker-list">
            <li class="theme__speaker" v-for="(speaker, index) in theme.speakers" :key="index">
              {{ speaker }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </div>
</template>

<script src="./Themes.js"/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Themes.css"/>
