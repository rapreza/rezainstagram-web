import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Photo extends React.Component {
    componentDidMount() {
        console.log("PhotoDidMount!");
    }

    render() {
        console.log('Photo')
    
        return (
          <div className="app-container"> 
            <h1>Photo</h1>
          </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
      
    };
}

export default withRouter(connect(mapStateToProps)(Photo));
