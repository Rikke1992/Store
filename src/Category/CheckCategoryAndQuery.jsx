import React from "react";
import { withRouter } from "react-router";
import { Query } from "../Query/Query";

class CheckCategoryAndQuery extends React.Component {
  render() {
    console.log(this.props.match.params.category);
    return <Query value={this.props.match.params.category} />;
  }
}

export default withRouter(CheckCategoryAndQuery);
