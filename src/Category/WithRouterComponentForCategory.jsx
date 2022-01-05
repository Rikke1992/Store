import React from "react";
import { withRouter } from "react-router";
import { Query } from "../Query/Query";

class WithRouterComponentForCategory extends React.Component {
  render() {
    return <Query value={this.props.match.params.category} />;
  }
}

export default withRouter(WithRouterComponentForCategory);
