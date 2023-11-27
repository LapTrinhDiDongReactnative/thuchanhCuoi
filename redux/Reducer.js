function pjReducer(
  state = {
    result: [],
  },
  action
) {
  switch (action.type) {
    case 'ACTION1':
      return { ...state, result: [...action.payload] }

    default:
      return state
  }
}

export default pjReducer
