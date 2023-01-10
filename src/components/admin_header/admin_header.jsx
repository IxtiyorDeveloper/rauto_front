import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";
import newsIcon from "../../images/taxi.png";
import announcementIcon from "../../images/rating.png";
import chartIcon from "../../images/statistics.png";
import order from "../../images/order.png";
import moderator from "../../images/mediator.png";
import bankPerson from "../../images/personalBank.png";
import users from "../../images/users.png";
import dataBase from "../../images/database.png";
import "./admin_header.css";
import React, {useEffect, useState} from "react";

function AdminHeader() {
    const {lang} = useSelector((state) => state.lang);
    const [type, setType] = useState(null)

    const {applications, menu,add_car,moderators,clients,statistics,bank,user,info,orders} = Language;

    useEffect(() => {
        if (!!localStorage.getItem("user_token")) {
            setType("user")
        }
        if (!!localStorage.getItem("bank_token")) {
            setType("bank")
        }
        if (!!localStorage.getItem("admin_token")) {
            setType("admin")
        }
        if (!!localStorage.getItem("moderator_token")) {
            setType("moderator")
        }
    }, [])

    return (
        <div id="wrapper">
            <div className="topbar">
                <div className="topbar-left">
                    <Link to="/admin/orders" className="logo">
            <span className="logo-light">
              <h2>RAUTO</h2>
            </span>
                        <span className="logo-sm">
              <i className="fa-solid fa-newspaper"></i>
            </span>
                    </Link>
                </div>
            </div>
            <div className="left side-menu">
                <div className="slimscroll-menu" id="remove-scroll">
                    <div id="sidebar-menu">
                        <ul className="metismenu" id="side-menu">
                            <li className="menu-title">{menu[lang]}</li>
                            {
                                (type === "admin") &&
                                <li>
                                    <Link to="/admin/orders" className="waves-effect">
                                            <i className="mdi  mdi-message-text-outline text-white bg-warning">
                                            <img src={order} alt="icon-menu" width={27}/>
                                        </i>
                                        <span>{orders[lang]}</span>
                                    </Link>
                                </li>
                            }
                            {
                                (type === "user" || type === "admin") &&
                                <li>
                                    <Link to="/admin/cards" className="waves-effect">
                                        <i className="mdi  mdi-message-text-outline text-white bg-warning">
                                            <img src={newsIcon} alt="icon-menu" width={27}/>
                                        </i>
                                        <span>{add_car[lang]}</span>
                                    </Link>
                                </li>
                            }
                            {
                                type === "admin" &&
                                <li>
                                    <Link to="/moderators" className="waves-effect">
                                        <i className="mdi  mdi-message-text-outline text-white bg-warning">
                                                <img src={moderator} alt="" width={27}/>
                                        </i>
                                        <span>{moderators[lang]}</span>
                                    </Link>
                                </li>
                            }
                            {
                                (type === "bank" || type === "admin" || type === "moderator") &&
                                <li>
                                    <Link
                                        to="/admin/applications"
                                        className="waves-effect d-flex justify-content-between"
                                    >
                                        <div>
                                            <i className="mdi mdi-trending-up bg-warning text-white">
                                                <img src="/favicons/applications.svg" alt="icon-menu" width={27} />
                                            </i>
                                            <span> {applications[lang]}</span>
                                        </div>
                                    </Link>
                                </li>
                            }
                            {
                                (type === "admin") &&
                                <li>
                                    <Link to="/admin/clients" className="waves-effect">
                                        <i className="mdi  mdi-message-text-outline text-white bg-warning">
                                            <img src={announcementIcon} alt="icon-menu" width={27}/>
                                        </i>
                                        <span>{clients[lang]}</span>
                                    </Link>
                                </li>
                            }
                            {
                                (type === "admin") &&
                                <li>
                                    <Link
                                        to="/admin/moderators"
                                        className="waves-effect d-flex justify-content-between"
                                    >
                                        <div>
                                            <i className="mdi mdi-trending-up bg-warning text-white">
                                                    <img src={bankPerson} alt="icon-menu" width={27}/>
                                            </i>
                                            <span>{bank[lang]}</span>
                                        </div>
                                    </Link>
                                </li>
                            }
                            {
                                (type === "admin") &&
                                <li>
                                    <Link
                                        to="/admin/users"
                                        className="waves-effect d-flex justify-content-between"
                                    >
                                        <div>
                                            <i className="mdi mdi-trending-up bg-warning text-white">
                                                    <img src={users} alt="icon-menu" width={27}/>
                                            </i>
                                            <span>{user[lang]}</span>
                                        </div>
                                    </Link>
                                </li>
                            }
                            {
                                (type === "admin") &&
                                <li>
                                    <Link
                                        to="/admin/info"
                                        className="waves-effect d-flex justify-content-between"
                                    >
                                        <div>
                                            <i className="mdi mdi-trending-up bg-warning text-white">
                                                <img src={dataBase} alt="icon-menu" width={27}/>
                                            </i>
                                            <span>{info[lang]}</span>
                                        </div>
                                    </Link>
                                </li>
                            }
                            {
                                (type === "admin") &&
                                <li>
                                    <Link to="/admin/statistic/all" className="waves-effect">
                                        <i className="mdi mdi-trending-up bg-warning text-white">
                                            <img src={chartIcon} alt="icon-menu" width={27}/>
                                        </i>
                                        <span>{statistics[lang]}</span>
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;
