import { createNamespacedHelpers } from 'vuex';

const themesNamespace = createNamespacedHelpers('themes');

export default {
  name: 'Themes',
  data() {
    return {
      title: 'Прими участие в голосовании за следующий доклад!',
      speakersTitle: 'Доклад от'
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
