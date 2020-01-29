import { Expense } from "./Expense";

// action strings
export const ADD_EXPENSE = "ADD_EXPENSE";

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  expense: Expense;
}

export type ExpenseActionTypes =
  | AddExpenseAction;

export type AppActions = ExpenseActionTypes;
