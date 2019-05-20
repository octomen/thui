<template>
  <div class="home">
    <User/>
    <VotingLogo/>
    <Themes/>
  </div>
</template>

<script>

import Themes from '@/components/Themes/index.vue';
import VotingLogo from '@/components/VotingLogo/index.vue';
import User from '@/components/User/index.vue';

export default {
  name: 'home',
  components: {
    Themes,
    VotingLogo,
    User
  },
};
</script>
