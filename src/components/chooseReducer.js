export default function chooseReducer(state, action) {
  switch (action.type) {
    case "choose":
      return action.payload;

    default:
      return [...state];
  }
}
