import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Timeline extends React.Component {
    componentDidMount() {
        console.log("TimelineDidMount!");
    }

    render() {
        console.log('Timeline')
    
        return (
          <div className="app-container">
            <h1>Timeline</h1>
          </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
      
    };
}

export default withRouter(connect(mapStateToProps)(Timeline));
