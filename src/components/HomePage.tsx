import React from "react";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import { AppState } from "../store/configureStore";
import { bindActionCreators } from "redux";
import { AppActions } from "../types/actions";
import { ThunkDispatch } from "redux-thunk";



interface HomePageState {}

type Props =  LinkDispatchProps;

export class HomePagePage extends React.Component<Props, HomePageState> {
  render() {
    /*const { expenses } = this.props;*/
    return (
      <div>
        <h1>Expense Page</h1>
      </div>
    );
  }
}


interface LinkDispatchProps {
    startAddExpense: (background: any) => void;
}

const mapStateToProps = (
  state: AppState
): { expenses: { background: any } } => ({
  expenses: state.expenses
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    startAddExpense: bindActionCreators(startAddExpense, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePagePage);
