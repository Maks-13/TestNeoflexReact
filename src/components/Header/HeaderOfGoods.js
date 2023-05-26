import React from "react";
import classes from "./HeaderOfGoods.module.css";
import heart from '../../assets/heart.png';
import purchasing from '../../assets/purchasing.png';

const HeaderOfGoods = () => {

    return (<header className={classes.block}>
        <div className={classes.heartLogoCircle}></div>
        <div className={classes.purchasingLogoCircle}></div>
        <div className={classes.new}>QPICK</div>
        <div className={classes.heartLogo}>
            <img src={heart} />
        </div>
        <div className={classes.purchasingLogo}>
            <img src={purchasing} />
        </div>
    </header>);

}

export default HeaderOfGoods;