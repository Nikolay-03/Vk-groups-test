import React, {useEffect, useState} from 'react';
import FilterGroups from "../../components/UI/FilterGroups/FilterGroups";
import styles from './style.module.css'
import {Filter} from "../../types/GroupsFilter";
import {useFetching} from "../../hooks/useFetching";
import {GroupsService} from "../../Services/GroupsService";
import {IGroup} from "../../types/Groups";
import {Spinner} from "@vkontakte/vkui";
import GroupList from "../../components/GroupList/GroupList";

const Communities = () => {
    const [groups, setGroups] = useState<IGroup[]>([])
    const [filter, setFilter] = useState<Filter>({sort: "", query: ""})
    const [fetchGroups, loading, error] = useFetching(async () => {
        try {
            const response = await GroupsService.GetGroupsResponse();
            if (response.result === 0 || !response.data) {
                throw new Error('Некорректный ответ сервера');
            }
            setGroups(response.data);
        } catch (e) {
            console.error(e);
        }
    });
    useEffect(() => {
        fetchGroups()
    }, []);
    return (
        <div className={styles.communities__wrapper}>
            <FilterGroups filter={filter} setFilter={setFilter}/>
            {loading ?
                <Spinner size="large" className={styles.spinner}> </Spinner>
                : <GroupList groups={groups}/>
            }
        </div>
    );
};

export default Communities;