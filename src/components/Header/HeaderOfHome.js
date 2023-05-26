import React from "react";
import classes from "./HeaderOfHome.module.css";
import purchasing from '../../assets/purchasing.png';
import heart from '../../assets/heart.png';

const a = sessionStorage.getItem(1);

const HeaderOfHome = () => {

    return (<header className={classes.block}>
        <div className={classes.heartLogoCircle}>
            <div className={classes.heartLogoText}>{a}</div>
        </div>
        <div className={classes.purchasingLogoCircle}>
            <div className={classes.heartLogoText}>{a}</div>
        </div>
        <div className={classes.new}>QPICK</div>
        <div className={classes.heartLogo}>
            <img src={heart} />
        </div>
        <div className={classes.purchasingLogo}>
            <img src={purchasing} />
        </div>
    </header>);

}

export default HeaderOfHome;