import React from "react";
import styles from "./Index.module.scss";
import img from '../img/vvv.png';

export const Product = () => {
    return (
        <div>
            
            <div className={styles.content}>
                <div className={styles.left_content}>
                    <i>
                        <svg
                            width="28"
                            height="29"
                            viewBox="0 0 28 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.5"
                                y="0.5"
                                width="27"
                                height="28"
                                rx="4.5"
                                stroke="#BDBDBD"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.50108 12.73L6 13.4056L12.3749 22.0003L23 7.67533L22.4987 7L12.3749 20.6492L6.50108 12.73Z"
                                fill="#BDBDBD"
                            />
                        </svg>
                    </i>

                    <div className={styles.img}>
                        <img src={img} />
                    </div>
                </div>
                <div className={styles.center_content}>
                    <div className={styles.text}>
                        <h1>
                            <span className={styles.text1}>Клубника </span>
                            <span className={styles.text2}>100гр</span>
                        </h1>

                        <p className={styles.text_center}>Королевская-высшая</p>

                        <div className={styles.button}>
                            <p id="btn1">-</p>
                            <p id="inhtml">1</p>
                            <p id="btn2">+</p>
                        </div>
                    </div>
                </div>

                <div className={styles.right_content}>
                    <i>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 8.586L12.828 5.757L14.243 7.172L11.414 10L14.243 12.828L12.828 14.243L10 11.414L7.172 14.243L5.757 12.828L8.586 10L5.757 7.172L7.172 5.757L10 8.586Z"
                                fill="#FF0505"
                                fill-opacity="0.76"
                            />
                        </svg>
                    </i>

                    <h2>18.800 сум</h2>
                </div>
            </div>
        </div>
    );
};

// let btn1 = document.getElementById("btn1")
// let i = document.getElementById("inhtml")
// let btn2 = document.getElementById("btn2")




