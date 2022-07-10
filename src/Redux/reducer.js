import { completeData } from "../data/TableData";

let initialData = completeData;

export const Reducer = (state = initialData, action) => {
  switch (action.type) {
    case "UPDATE":
      let update = state.map((ele) => {
        if (ele.id === action.payload.id) return action.payload;
        else return ele;
      });
      return [...update];
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      let remain = state.filter((ele) => {
        return ele.id !== action.payload.id;
      });
      return [...remain];
    default:
      return state;
  }
};
