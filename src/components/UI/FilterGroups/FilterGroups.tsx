import React from 'react';
import styles from './style.module.css'
import {GroupsFilterProps} from "../../../types/GroupsFilter";

const FilterGroups = ({filter, setFilter}: GroupsFilterProps) => {
    return (
        <div>
            <input
                value={filter.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter,query: e.target.value})}
                placeholder="Поиск"
                className={styles.input__filter}
            />
        </div>
    );
};

export default FilterGroups;