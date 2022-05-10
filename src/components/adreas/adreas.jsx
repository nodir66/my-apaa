import React from "react";
import { Icon } from "../Icon/icon.jsx";
import styles from "./adreas.scss";


export const Adreas = () => {
    return (
        <div>
            <div className="adreas">
                <div className="text">
                    <h1>Адрес доставки</h1>
                </div>

                <div className="adreas_block">
                    <div className="item">
                        <Icon/>
                        <p>Бобура 34</p>

                    </div>
                    <b>Добавить новый адресс</b>




                    
                </div>
            </div>
        </div>
    );
}