import React from "react";
import styles from "./button.scss"
import PropTypes from 'prop-types';





export const TestUseState = (props) => {
    // const [count, setCount] = React.useState(0);
    const handlePlus = () => props.setCount(props.test + 1)
    const handlePluss = () => {
      if (props.test > 0){
          props.setCount(props.test - 1)
      }
    }

    

    

    
    

    return (
      <div>
        <div className="button">
          <p onClick={handlePluss}>-</p>
          <p >{props.test}</p>
          <p onClick={handlePlus} >+</p>
        </div>
          
      </div>


    )
}


