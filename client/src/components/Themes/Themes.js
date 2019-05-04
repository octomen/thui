import { createNamespacedHelpers } from 'vuex';

const themesNamespace = createNamespacedHelpers('themes');

export default {
  name: 'Themes',
  props: {
    title: String
  },
  computed: {
    ...themesNamespace.mapGetters([
      'newThemes',
      'savedThemes'
    ]),
    savedThemes: function () {
      return this.$store.state.themes.list;
    }
  }
};
