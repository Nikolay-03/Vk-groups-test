import React from 'react';
import styles from "./style.module.css"
const Input = (props:any) => {
    return (
        <input {...props} className={styles.input__filter}>

        </input>
    );
};

export default Input;