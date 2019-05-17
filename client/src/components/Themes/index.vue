<template>
  <div class="themes-page">
    <h1 class="themes-title">{{ title }}</h1>
    <ol class="theme-list">
      <li v-for="theme in savedThemes" v-bind:key="theme.id" class="theme">
        <div class="theme__field">
          {{ author }}
        </div>
        <div class="theme__author">
          <Avatar v-bind:user="theme.author" />
        </div>
        <div class="theme__field">
          {{ themeTitle }}
        </div>
        <div class="theme__content">
          <div class="theme__title">{{ theme.title }}</div>
          <div class="theme__description">{{ theme.description }}</div>
        </div>
        <div class="theme__field">
          {{ reporter }}
        </div>
        <div v-if="theme.reporter" class="theme__reporter" >
          <Avatar v-bind:user="theme.reporter" />
        </div>
        <div v-else class="theme__reporter" >
          {{ noReporter }}
        </div>
      </li>
    </ol>
    <v-btn-toggle v-model="toggle_multiple" multiple class="theme__buttons">
      <v-btn v-for="theme in savedThemes" v-bind:key="theme.id" class="theme__button">
        <div class="theme">
          <div class="theme__field">
            {{ author }}
          </div>
          <div class="theme__author">
            <Avatar v-bind:user="theme.author" />
          </div>
          <div class="theme__field">
            {{ themeTitle }}
          </div>
          <div class="theme__content">
            <div class="theme__title">{{ theme.title }}</div>
            <div class="theme__description">{{ theme.description }}</div>
          </div>
          <div class="theme__field">
            {{ reporter }}
          </div>
          <div v-if="theme.reporter" class="theme__reporter" >
            <Avatar v-bind:user="theme.reporter" />
          </div>
          <div v-else class="theme__reporter" >
            {{ noReporter }}
          </div>
        </div>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script src="./Themes.js"/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Themes.css"/>
