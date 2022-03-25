import React from "react";
import styles from "./order.module.scss";

export const Order = () =>{
    return (
        <div>
            <div className={styles.order_content}>
                <div className={styles.content_block}>
                    <div className={styles.left_content}>
                        <h2>Товаров:</h2>
                        <h2>Доставка:</h2>
                        <h2>Итого:</h2>
                    </div>

                    <div className={styles.right_content}>
                        <p>30</p>
                        <p>10000 сум</p>
                        <p>24.300 сум</p>
                    </div>
                </div>

                <button>Заказать</button>
            </div>
        </div>
    );
}