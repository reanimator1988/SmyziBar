import React from 'react';
// import LogoComponent from './Logo.jsx';
import Description from './Description.jsx';
import logo from '../../../static/download.png';



const Main = () => {
    return (
        <div className='container-main'>
            <Description></Description>
            <div className="left-side"></div>
            
        </div>
    );
}

export default Main;

{/* <LogoComponent logoSrc={logo} /> */ }
