import { Expense } from "../types/Expense";
import {
  ExpenseActionTypes,
  ADD_EXPENSE,
} from "../types/actions";

const expensesReducerDefaultState = {
  background: "blue"
}
const expenseReducer = (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
): Expense => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {...state, background : "red" };
    default:
      return state;
  }
};

export { expenseReducer };
