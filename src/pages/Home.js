import React, { useState } from 'react';
import MainBlockHome from '../components/MainBlock/MainBlockHome';
import Footer from '../components/Footer/FooterOfHome';
import HeaderOfHome from '../components/Header/HeaderOfHome';
import Context from '../context/context';


const Home = () => {

    const [counter, setCounter] = useState();

    let price = 0;

    const onClickHandler = (price) => {

        setCounter(price);

        alert(price);

    };

    const headphones = [
        {
            id: 1,
            img: './headphonesV1.png',
            title: 'Apple BYZ S8521',
            price: 2927,
            rate: 4.7,
        },
        {
            id: 2,
            img: './headphonesV2.png',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
        },
        {
            id: 3,
            img: './headphonesV3.png',
            title: 'Apple Earpods',
            price: 2927,
            rate: 4.5,
        },
        {
            id: 4,
            img: './headphonesV1.png',
            title: 'Apple BYZ S8521',
            price: 2927,
            rate: 4.7,
        },
        {
            id: 5,
            img: './headphonesV2.png',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
        },
        {
            id: 6,
            img: './headphonesV3.png',
            title: 'Apple Earpods',
            price: 2927,
            rate: 4.5,
        }
    ];

    const wirelessHeadphones = [
        {
            id: 1,
            img: './airpodsV1.png',
            title: 'Apple Airpods',
            price: 9527,
            rate: 4.7,
        },
        {
            id: 2,
            img: './airpodsV2.png',
            title: 'GERLAX GH-04',
            price: 6527,
            rate: 4.7,
        },
        {
            id: 3,
            img: 'wirelessHeadphones.png',
            title: 'BOROFONE BO4',
            price: 7527,
            rate: 4.7
        }

    ]

    return (
        <Context.Provider value={{ price: price, onClickHandler: onClickHandler }}>
            <HeaderOfHome counter={counter} />
            <MainBlockHome headphones={headphones} wirelessHeadphones={wirelessHeadphones} />
            <Footer />
        </Context.Provider>
    );
}


export default Home;
