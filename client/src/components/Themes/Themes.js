import { createNamespacedHelpers } from 'vuex';
import Avatar from '@/components/Avatar/index.vue';

const themesNamespace = createNamespacedHelpers('themes');

export default {
  name: 'Themes',
  components: {
    Avatar
  },
  data() {
    return {
      title: 'Прими участие в голосовании за следующий доклад!',
      author: 'Чья идея:',
      reporter: 'Кто смелый?',
      noReporter: '(не нашелся...)',
      themeTitle: 'О чем:'
    };
  },
  mounted() {
    const { sessionId } = this.$store.state.auth;
    this.fetchThemes(sessionId);
  },
  computed: {
    ...themesNamespace.mapGetters([
      'newThemes',
      'savedThemes'
    ])
  },
  methods: {
    ...themesNamespace.mapActions([
      'fetchThemes'
    ])
  }
};
