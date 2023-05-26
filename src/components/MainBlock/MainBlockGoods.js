import React, { useEffect } from "react";
import classes from "./MainBlockGoods.module.css";
import picture from "../../assets/headphonesV1.png";
import pictureOfDustbin from "../../assets/dustbin.png";
import pictureOfEclipse from "../../assets/eclipse.png";
import pictureOfPlus from "../../assets/plus.png";
import pictureOfMinus from "../../assets/minus.png";

const MainBlockGoods = (props) => {

    return (
        <main>
            <div className={classes.basket}>Корзина</div>
            <div className={classes.firstBlock}>
                <img className={classes.pictureOfHeadphones} src={picture} alt='Картинка не найдена!' />
                <div className={classes.text1}>Apple BYZ S852I</div>
                <div className={classes.text2}>2 927 &#8381;</div>
                <img className={classes.pictureOfDustbin} src={pictureOfDustbin} alt='Картинка не найдена!' />
                <img className={classes.pictureOfEclipse1} src={pictureOfEclipse} alt='Картинка не найдена!' />
                <img className={classes.pictureOfMinus} src={pictureOfMinus} alt='Картинка не найдена!' />
                <img className={classes.pictureOfEclipse2} src={pictureOfEclipse} alt='Картинка не найдена!' />
                <img className={classes.pictureOfPlus} src={pictureOfPlus} alt='Картинка не найдена!' />
                <div className={classes.number}>1</div>
            </div>
            <div className={classes.secondBlock}>
                <div className={classes.text3}>Итого</div>
                <div className={classes.text4}>&#8381; 2 927</div>
                <button><span className={classes.text5}>Перейти к оформлению</span></button>
            </div>
        </main>
    );

}

export default MainBlockGoods;