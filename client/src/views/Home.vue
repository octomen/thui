<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Themes title="New themes is coming!"/>
  </div>
</template>

<script>

import Themes from '@/components/Themes/index.vue';

export default {
  name: 'home',
  data: () => ({
    themes: [],
  }),
  components: {
    Themes,
  },
};
</script>
