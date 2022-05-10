import React from 'react';
import { Icon } from "../Icon/icon.jsx";
import styles from "./delivery.scss";



export const Delivery = () => {
    return (
        <div>
            <div className="delivery">
                <div className="text">
                    <h1>Способ доставки</h1>
                </div>

                <div className="delivery_block">
                    <div className="item">
                        <Icon/>
                        <p>Курьером до двери</p>
                    </div>

                    <div className="item">
                        <Icon/>
                        <p>Самовывоз</p>
                    </div>
                </div>
            </div>

        </div>
    )
}