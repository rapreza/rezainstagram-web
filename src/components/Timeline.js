import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Icon } from "antd";
import { Link } from 'react-router-dom';

class Timeline extends React.Component {
    componentDidMount() {
        console.log("TimelineDidMount!");
    }

    render() {
        //console.log('Timeline')
    
        return (
          <div className="app-container" itemID="timeline">
            
            <article>
              <header>
                <div className="col-avatar"><Link to="/user"><button><img alt="" src="https://instagram.fcgk18-2.fna.fbcdn.net/vp/abd34d2454fa52591d62b140bfdcbc17/5E2D3732/t51.2885-19/s150x150/15875758_1403356446342699_1359251613247602688_n.jpg?_nc_ht=instagram.fcgk18-2.fna.fbcdn.net&_nc_cat=1" /></button></Link></div>
                <div className="col-username"><Link to="/user"><h2 className="fw-700">nintendo</h2></Link></div>
                <div className="col-ellipsis"><Icon type="ellipsis" /></div>
              </header>
              <div className="photo-box"><Link to="/photo"><img alt="" src="https://scontent-sin2-2.cdninstagram.com/vp/5232d7ea0a94c8fb145a1d50efe9963e/5E31B487/t51.2885-15/sh0.08/e35/s640x640/70499560_146140869939994_4736061306736152422_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=110" /></Link></div>
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
                </div><div>
                  <span className="tcol-999">OCTOBER 4</span>
                </div>
              </footer>
            </article>

            <article>
              <header>
                <div className="col-avatar"><button><img alt="" src="https://scontent-sin2-2.cdninstagram.com/vp/eb79eaca8ff8c4cea2c3005e4dc8342e/5E1F1C5E/t51.2885-19/s150x150/61186455_2256222687794580_3358141560448352256_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com" /></button></div>
                <div className="col-username"><h2 className="fw-700">monsterhuntergame</h2></div>
                <div className="col-ellipsis"><Icon type="ellipsis" /></div>
              </header>
              <div className="photo-box"><img alt="" src="https://scontent-sin2-2.cdninstagram.com/vp/6ad404dd18551d354f32fc86c917feb8/5D9F9026/t51.2885-15/fr/e15/s1080x1080/69793784_156263795476823_5969548663179318231_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=111" /></div>
              <footer>
                <section className="row-icons">
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-paper-plane"></i>
                  <i className="far fa-bookmark is-pulled-right"></i>
                </section>
                <div>
                  <h2 className="fw-700">123 likes</h2>
                </div>
                <div className="desc-row">
                  <p><span className="fw-700">monsterhuntergame</span> Keep the pressure on your targets with a Clutch Claw attack during the Switch Axe Elemental Discharge.</p>
                </div><div>
                  <span className="tcol-999">OCTOBER 1</span>
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

export default withRouter(connect(mapStateToProps)(Timeline));
