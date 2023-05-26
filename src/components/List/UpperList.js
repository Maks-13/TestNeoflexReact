import React from "react";
import classes from "./UpperList.module.css";
import star from "../../assets/star.png";
import Context from "../../context/context";

const Lists = (props) => {

    const picture = props.img.split('/');

    let block;

    if ('headphonesV3.png' === picture[1]) {
        block = (
            <div className={classes.pictureV2}>
                <img src={props.img} />
            </div>
        )
    } else {
        block = (
            <div className={classes.pictureDefault}>
                <img src={props.img} />
            </div>
        )
    }

    return (
        <Context.Consumer>
            {({ onClickHandler }) => (
                <div className={classes['small_flex_container']}>
                    {block}
                    <div className={classes.innerBlock} >
                        <span className={classes.title}>{props.title}</span>
                        <span className={classes.price}>{props.price} &#8381;</span>
                        <span className={classes.rate}>{props.rate}</span>
                        {(props.counter() == 1) ? <span className={classes.additionalContent}>3527 &#8381;</span> : false}
                        <img className={classes.pictureOfStar} src={star} alt='Картинка не найдена!'></img>
                    </div>
                    <a className={classes.pointer} onClick={() => { onClickHandler(props.price) }}>Купить</a>
                </div>
            )}
        </Context.Consumer>
    )

}

export default Lists;