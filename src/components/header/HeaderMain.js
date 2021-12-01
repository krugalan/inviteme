import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CTAButton } from '../shared/CTAButton';
import { HeaderLogo } from './HeaderLogo';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';


export const Menu = [
    {
        title: 'MENUPPAL1',
        subItems: [
            { title: 'SM111111111111' },
            { title: 'SM12' },
            { title: 'SM13' },
            { title: 'SM14' }
        ],
    },
    {
        title: 'MENUPPAL2',
        subItems: [
            { title: 'SM21' },
            { title: 'SM22' },
            { title: 'SM23' },
            { title: 'SM2422222222' }
        ],
    },
    {
        title: 'MENUPPAL3',
        subItems: [
            { title: 'SM31' },
            { title: 'SM32' },
            { title: 'SM3333333333333333333' },
            { title: 'SM34' }
        ],
    }

]


export const HeaderMain = () => {
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 991px)' })
    const [toggleState, setToggleState] = useState("");
    const [subMenuState, setSubMenuState] = useState("");
    const [anima, setAnima] = useState("");
    const [currentMenuTitle, setCurrentMenuTitle] = useState('');
    const [subItemsMenuArr, setSubItemsMenuArr] = useState([]);

    const SubItems = () => {
        return (
            subItemsMenuArr.map((sel, index) =>
                <a key={index} href="index.html" className="mega-drop-menu-item sub-menu--item"> {sel.title} </a>
            )
        )

    }

    const toggleMenu = () => {
        (toggleState === "") ? setToggleState("active") : setToggleState("")
    }

    const showSubMenu = (el) => {
        if (el) {
            setSubItemsMenuArr(el.subItems);
            setCurrentMenuTitle(el.title);
        }

        if (subMenuState === "") {
            setSubMenuState("active");
            setAnima('0.5s ease 0s 1 normal forwards running slideLeft')
        }
        else {
            setAnima("slideRight 0.5s ease forwards");
            setTimeout(() => {
                setSubMenuState("");
            }, 200);
        }
    }





    return (

        <header className="site-header site-header--menu-right landing-1-menu site-header--absolute site-header--sticky">
            <div className="container-fluid">
                <nav className="navbar site-navbar">
                    <HeaderLogo />

                    {/* MENU */}
                    <div className="menu-block-wrapper">

                        <div className={"menu-overlay " + toggleState}></div>
                        <nav className={"menu-block " + toggleState} id="append-menu-header">

                            <div className={"mobile-menu-head " + subMenuState}>
                                <div onClick={() => showSubMenu()} className="go-back"> <ArrowBackIosNewIcon /></div>
                                <div className="current-menu-title"> {currentMenuTitle} </div>
                                <div onClick={toggleMenu} className="mobile-menu-close"> <CloseIcon /></div>
                            </div>



                            <ul className="site-menu-main">
                                {
                                    Menu.map((el, index) =>
                                        <li key={index} onClick={() => showSubMenu(el)} className="nav-item nav-item-has-children has-megamenu">
                                            <a className="nav-link-item drop-trigger">{el.title}<i className="fas fa-angle-down"></i></a>

                                            <div className={"sub-menu megamenu  megadropdown-center  d-lg-flex align-items-center " + subMenuState}
                                                style={{ animation: `${anima}` }}
                                                id="submenu-100">
                                                <div className="col-lg-4 d-none d-lg-block">
                                                    <div className="mega-menu-image">
                                                        <img className="w-100" src="image/landing-2/people-3.png" alt="image" />
                                                    </div>
                                                </div>

                                                <ul className="col-lg-8 col-12 row-lg list-unstyled py-lg-7">
                                                    <li className="col-lg-3">
                                                        <div className="single-dropdown-block">
                                                            {
                                                                (isTabletOrMobileDevice)
                                                                    ? <SubItems />
                                                                    : el.subItems.map((sel, index) => <a key={index} href="index.html" className="mega-drop-menu-item sub-menu--item"> {sel.title} </a>)
                                                            }
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>

                        </nav>
                    </div>
                    {/* MENU */}

                    <CTAButton title="Confirmar Invitación" />


                    <div onClick={toggleMenu} className="mobile-menu-trigger">
                        <span></span>
                    </div>


                </nav>
            </div>
        </header>



    )
}
