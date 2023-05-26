import React, { Fragment } from "react";
import Card from '../UI/Card.js';
import classes from "./MainBlockHome.module.css";
import UpperList from "../List/UpperList.js";
import LowerList from "../List/LowerList.js";

const MainBlockHome = (props) => {

    let i = 0;

    const counterFunction = () => {
        return ++i;
    }

    return (
        <Fragment>
            <div className={classes['first_main_block']}>
                <div className={classes.text}>
                    Наушники
                </div>
                <Card className={classes['big_flex_container']} >
                    {
                        props.headphones.map((point) => (
                            <UpperList key={point.id}
                                img={point.img}
                                title={point.title}
                                price={point.price}
                                rate={point.rate}
                                counter={counterFunction}
                            />
                        ))
                    }
                </Card>
            </div>
            <div className={classes['first_main_block']}>
                <div className={classes.text}>
                    Беспроводные наушники
                </div>
                <Card className={classes['big_flex_container']} >
                    {
                        props.wirelessHeadphones.map((point) => (
                            <LowerList key={point.id}
                                img={point.img}
                                title={point.title}
                                price={point.price}
                                rate={point.rate}
                                counter={counterFunction}
                            />
                        ))
                    }
                </Card>
            </div>
        </Fragment>


    );
};

export default MainBlockHome;