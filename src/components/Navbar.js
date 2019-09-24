import React from "react";
import { NavBar } from 'antd-mobile';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

export const MyNavBar = () => {
    console.log('MyNavBar!')
    return(
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="instagram" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="0" type="compass" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="heart" style={{ marginRight: '16px' }} />,
                  <Icon key="2" type="user" />,
                ]}
            >   
            <Link to="/"><div className="instagramlogo"></div></Link>
            </NavBar>
        </div>
    )   
}