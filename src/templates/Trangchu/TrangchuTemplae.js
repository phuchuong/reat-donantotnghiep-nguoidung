
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../../compoments/Navbar/Navbar';
import Footer from '../../compoments/Footer/Footer';
import Header from '../../compoments/Header/Header';



export const TrangchuTempalates = (props) => {
    const { Compoment, ...propsRoute } = props;
    return <Route {...propsRoute} render={(propsRoute) => {
        return <>
            <Header/>
            <Navbar/>

            <Compoment {...propsRoute} />

            <Footer/>
        </>
    }} />

}