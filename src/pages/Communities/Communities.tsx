import React, {useEffect, useState} from 'react';
import styles from './style.module.css'
import {Filter} from "../../types/GroupsFilter";
import {useFetching} from "../../hooks/useFetching";
import {GroupsService} from "../../Services/GroupsService";
import {IGroup} from "../../types/Groups";
import {Spinner} from "@vkontakte/vkui";
import GroupList from "../../components/GroupList/GroupList";
import FilterGroups from "../../components/FilterGroups/FilterGroups";
import {useSortedGroups} from "../../hooks/useGroupsFilter";

const Communities = () => {
    const [groups, setGroups] = useState<IGroup[]>([])
    const [filter, setFilter] = useState<Filter>({sort:{privacy:"", avatar:"", friends:""}, query: ""})
    const sortedGroups = useSortedGroups(groups, filter.sort)
    const [avatars, setAvatars] = useState<string[]>([]);
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
    useEffect(() => {
        if (groups.length > 0) {
            const avatarsWithoutUndefined = groups.map(group => group.avatar_color).filter((avatar): avatar is string => typeof avatar === 'string');
            const uniqueAvatars = Array.from(new Set(avatarsWithoutUndefined));
            setAvatars(uniqueAvatars);
        }
    }, [groups]);
    return (
        <div className={styles.communities__wrapper}>
            <FilterGroups filter={filter} setFilter={setFilter} avatars={avatars}/>
            {loading ?
                <Spinner size="large" className={styles.spinner}> </Spinner>
                : <GroupList groups={sortedGroups}/>
            }
        </div>
    );
};

export default Communities;