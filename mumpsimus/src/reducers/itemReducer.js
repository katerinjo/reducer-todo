export const initState = {
  list: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

export const reduce = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        list: [
          ...state.list,
          {item: action.item, completed: false, id: Date.now()}
        ]
      };
    case 'TOGGLE':
      const updatedList = state.list.map(todo => (
        {...todo, completed: !todo.completed}
      ));
      return {
        ...state,
        list: updatedList
      };
    case 'CLEAR':
      const kept = state.list.filter(todo => !todo.completed);
      return {
        ...state,
        list: kept
      };
    default:
      return state;
  }
};
