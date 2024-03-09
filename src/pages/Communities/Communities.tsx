import React, {useState} from 'react';
import FilterGroups from "../../components/UI/FilterGroups/FilterGroups";
import styles from './style.module.css'
import {Filter} from "../../types/GroupsFilter";
import {useFetching} from "../../hooks/useFetching";
const Communities = () => {
    const [groups, setGroups] = useState([])
    const [filter, setFilter] = useState<Filter>({sort:"",query:""})
    const [fetchGruops,loading,error] = useFetching(async () => {
        const response =
    })
    return (
        <div className={styles.communities__wrapper}>
            <FilterGroups filter={filter} setFilter={setFilter}/>
        </div>
    );
};

export default Communities;