<template>
  <div class="themes-page">
    <h1 class="themes-title">{{ title }}</h1>
    <v-list three-line>
      <template v-for="(theme, index) in savedThemes">
        <v-list-tile
          :key="theme.title"
          avatar
          @click=""
        >
          <v-list-tile-avatar size="50">
            <Avatar v-bind:user="theme.author" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="theme.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="theme.description"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider
          v-if="savedThemes.length - 1 !== index"
          :key="index"
          :inset="true"
        ></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script src="./Themes.js"/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Themes.css"/>
