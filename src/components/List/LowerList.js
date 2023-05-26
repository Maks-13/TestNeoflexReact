import React from "react";
import classes from "./LowerList.module.css";
import star from "../../assets/star.png";

const LowerList = (props) => {

    const picture = props.img.split('/');

    let block;

    if ('wirelessHeadphones.png' === picture[1]) {
        block = (
            <div className={classes.wirelessHeadphones}>
                <img src={props.img} />
            </div>
        )
    } else if ('airpodsV1.png' === picture[1]) {
        block = (
            <div className={classes.pictureV1}>
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
        <div className={classes['small_flex_container']}>
            {block}
            <div className={classes.innerBlock}>
                <span className={classes.title}>{props.title}</span>
                <span className={classes.price}>{props.price} &#8381;</span>
                <span className={classes.rate}>{props.rate}</span>
                {(props.counter() == 1) ? <span className={classes.additionalContent}>3527 &#8381;</span> : false}
                <img className={classes.pictureOfStar} src={star}></img>
            </div>
            <a>Купить</a>
        </div >
    )

}

export default LowerList; 