import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Icon } from "antd";
import { Link } from 'react-router-dom';

class Photo extends React.Component {
    componentDidMount() {
        console.log("PhotoDidMount!");
    }

    render() {
        console.log('Photo')
    
        return (
          <div className="app-container"> 
            
            <article>
              <header>
              <div className="col-avatar"><Link to="/user"><button><img alt="" src="https://instagram.fcgk18-2.fna.fbcdn.net/vp/abd34d2454fa52591d62b140bfdcbc17/5E2D3732/t51.2885-19/s150x150/15875758_1403356446342699_1359251613247602688_n.jpg?_nc_ht=instagram.fcgk18-2.fna.fbcdn.net&_nc_cat=1" /></button></Link></div>
                <div className="col-username"><Link to="/user"><h2 className="fw-700">nintendo</h2></Link></div>
                <div className="col-ellipsis"><Icon type="ellipsis" /></div>
              </header>
              <div className="photo-box"><img alt="" src="https://scontent-sin2-2.cdninstagram.com/vp/5232d7ea0a94c8fb145a1d50efe9963e/5E31B487/t51.2885-15/sh0.08/e35/s640x640/70499560_146140869939994_4736061306736152422_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=110" /></div>
              <footer>
                <section className="row-icons">
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-paper-plane"></i>
                  <i className="far fa-bookmark is-pulled-right"></i>
                </section>
                <div>
                  <h2 className="fw-700">420 likes</h2>
                </div>
                <div className="desc-row">
                  <p><span className="fw-700">nintendo</span>Charge up your amiibo collection with this new Pichu figure from the Super Smash Bros. series!</p>
                </div>
                <div>
                  <span className="tcol-999">OCTOBER 4</span>
                </div>
                <hr />
                <div className="desc-row">
                  <p><span className="fw-700">komen 1</span>lorem ipsum</p>
                </div>
                <div className="desc-row">
                  <p><span className="fw-700">komen 2</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="desc-row">
                  <p><span className="fw-700">komen 3</span>KETIGAX GAN</p>
                </div>
                <div className="desc-row">
                  <p><span className="fw-700">komen 4</span>According to all known laws of aviation, there is no way that a bee should be able to fly.</p>
                </div>
                <div className="desc-row">
                  <p><span className="fw-700">komen 5</span>what?</p>
                </div>
                <div className="desc-row">
                  <p><span className="fw-700">komen 6</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
              </footer>
            </article>

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
