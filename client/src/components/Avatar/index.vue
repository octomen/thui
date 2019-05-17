<template>
    <div class="avatar">
      <div
        class="avatar__pic"
        v-html="user.avatar"
        v-bind:title="user.name"
      >
      </div>
    </div>
</template>

<style scoped src="./Avatar.css"/>

<script src="./Avatar.js"/>
