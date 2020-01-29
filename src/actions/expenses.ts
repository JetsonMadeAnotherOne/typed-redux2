import uuid from "uuid";
import {Expense} from "../types/Expense";
import {
    ADD_EXPENSE,
    AppActions,
} from "../types/actions";
import {Dispatch} from "redux";
import {AppState} from "../store/configureStore";

export const addExpense = (expense: Expense): AppActions => ({
    type: ADD_EXPENSE,
    expense
});


export const startAddExpense = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {

        const background = uuid();

        return dispatch(
            addExpense({
                background,
            })
        );
    };
};
