import React from 'react';
import {SelectProps} from "./selectTypes";
import styles from "../Select/select.module.css"

const CustomSelect = ({options, defaultValue, value, onChange}: SelectProps) => {
    return (
        <select className={styles.select__wrapper} value={value}
                onChange={(e) => onChange(options.find(option => option.value === e.target.value) || {
                    value: '',
                    name: ''
                })}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default CustomSelect;
