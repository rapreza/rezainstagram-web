import React from "react";
import { NavBar } from 'antd-mobile';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

function tes(){
    console.log('TES onLeftClick');
}

export const MyNavBar = () => {

    console.log('MyNavBar!')
    return(
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="instagram" />}
                onLeftClick={() => tes()}
                rightContent={[
                  <Icon key="0" type="compass" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="heart" style={{ marginRight: '16px' }} />,
                  <Link key="2" to="/user"><Icon type="user" /></Link>,
                ]}
            >   
            <Link to="/"><div className="instagramlogo"></div></Link>
            </NavBar>
        </div>
    )   
}