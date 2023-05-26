import React from "react";
import classes from "./FooterOfHome.module.css";
import circle from "../../assets/circle.png";
import vkPicture from "../../assets/VK.png";
import TelegramPicture from "../../assets/Telegram.png";
import WhatsappPicture from "../../assets/Whatsapp.png";

const Footer = () => {

    return (
        <div className={classes.mainBlock} >
            <div className={classes.mainOuterBlock}>
                <div className={classes.textOuterBlock}>QPICK</div>
            </div>
            <div className={classes.mainInnerBlock}>
                <div className={classes.textInnerBlock1}>Избранное</div>
                <div className={classes.textInnerBlock3}>Корзина</div>
                <div className={classes.textInnerBlock4}>Контакты</div>
            </div>
            <div className={classes.textInnerBlock2}>Условия сервиса</div>
            <img className={classes.picture} src={circle} alt='Картинка не найдена!'></img>
            <div className={classes.textInnerBlock5}>Рус</div>
            <div className={classes.textInnerBlock6}>Eng</div>
            <img className={classes.vkPicture} src={vkPicture} alt='Картинка не найдена!' />
            <img className={classes.telegramPicture} src={TelegramPicture} alt='Картинка не найдена!' />
            <img className={classes.whatsappPicture} src={WhatsappPicture} alt='Картинка не найдена!' />
        </div>

    )

}

export default Footer;