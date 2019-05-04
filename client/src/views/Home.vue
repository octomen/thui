<template>
  <div class="home">
    <VotingLogo/>
    <Themes/>
  </div>
</template>

<script>

import Themes from '@/components/Themes/index.vue';
import VotingLogo from '@/components/VotingLogo/index.vue';


export default {
  name: 'home',
  components: {
    Themes,
    VotingLogo
  },
};
</script>
