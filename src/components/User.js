import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class User extends React.Component {
    componentDidMount() {
        console.log("UserlineDidMount!");
    }

    render() {
        console.log('User')
    
        return (
          <div className="app-container">
            <h1>User</h1>
          </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
      
    };
}

export default withRouter(connect(mapStateToProps)(User));
