import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

class User extends React.Component {
    componentDidMount() {
        console.log("UserlineDidMount!");
    }

    render() {
        console.log('User')
    
        return (
          <div className="app-container page-user">
            <header>
              <div className="col-avatar"><img alt="" src="https://instagram.fcgk18-2.fna.fbcdn.net/vp/abd34d2454fa52591d62b140bfdcbc17/5E2D3732/t51.2885-19/s150x150/15875758_1403356446342699_1359251613247602688_n.jpg?_nc_ht=instagram.fcgk18-2.fna.fbcdn.net&_nc_cat=1" /></div>
              <div className="col-counters">
                <div className="column is-one-thirds"><h2>123</h2>posts</div>
                <div className="column is-one-thirds"><h2>88.8M</h2>followers</div>
                <div className="column is-one-thirds"><h2>4</h2>following</div>
              </div>
            </header>
            <section className="desc-row">
              <h1 className="fw-700">Nintendo</h1>
              <p>Official home of all things Nintendo of America! Tag your Nintendo photos with #nintendo to be part of the story!</p>
            </section>
            <section className="icons-row">
              <i className="fas fa-th"></i>
              <i className="fas fa-video"></i>
              <i className="fas fa-user-friends"></i>
            </section>
            <section className="photos-row">
              <div><Link to="/photo"><img alt="img" src="https://scontent-sin2-2.cdninstagram.com/vp/5232d7ea0a94c8fb145a1d50efe9963e/5E31B487/t51.2885-15/sh0.08/e35/s640x640/70499560_146140869939994_4736061306736152422_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=110" /></Link></div>
              <div><img alt="img" src="https://picsum.photos/200?random=2" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=3" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=4" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=5" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=6" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=7" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=8" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=9" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=10" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=11" /></div>
              <div><img alt="img" src="https://picsum.photos/200?random=12" /></div>
            </section>
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
