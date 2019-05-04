<template>
  <div id="app">
    <router-view v-if="auth.sessionId"/>
    <ErrorPage
      v-else
      title="Ошибка авторизации"
      description="Получите token у нашего telegram-бота и передайте его в GET параметре"
    />
  </div>
</template>

<script src="./App.js"/>

<style src="./App.css"/>
