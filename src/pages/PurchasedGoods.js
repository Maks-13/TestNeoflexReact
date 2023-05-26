import React, { Fragment } from "react";
import MainBlockGoods from '../components/MainBlock/MainBlockGoods';
import FooterOfGoods from "../components/Footer/FooterOfGoods";
import HeaderOfGoods from "../components/Header/HeaderOfGoods";

const PurchasedGoods = () => {

    return (
        <Fragment>
            <HeaderOfGoods />
            <MainBlockGoods />
            <FooterOfGoods />
        </Fragment >
    );
}

export default PurchasedGoods;