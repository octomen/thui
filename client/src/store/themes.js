export const ADD_THEME = 'addTheme';

export const themesState = {
  namespace: true,
  state: {
    list: [
      {
        id: 1,
        title: 'Awesome vuex',
        description: 'Vuex is a state management pattern + library for Vue.js applications. ' +
          'It serves as a centralized store for all the components in an application, ' +
          'with rules ensuring that the state can only be mutated in a predictable fashion. ' +
          'It also integrates with Vue\'s official devtools extension to provide advanced features such as ' +
          'zero-config time-travel debugging and state snapshot export / import.'
      }
    ]
  },
  getters: {
    newThemes: state => state.list.filter(theme => !theme.id),
    savedThemes: state => state.list.filter(theme => theme.id)
  },
  mutations: {
    [ADD_THEME]: (state, payload) => {
      const newTheme = {
        id: undefined,
        title: payload.title,
        description: payload.description
      };

      state.list.push(newTheme);
    }
  },
  actions: {

  }
};
