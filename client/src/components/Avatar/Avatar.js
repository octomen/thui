import { createNamespacedHelpers } from 'vuex';

const authNamespace = createNamespacedHelpers('auth');

export default {
  name: 'Avatar',
  props: ['user'],
};
