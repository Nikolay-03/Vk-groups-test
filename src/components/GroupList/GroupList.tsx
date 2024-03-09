import React from 'react';
import Group from "../Group/Group";
import {IGroup} from "../../types/Groups";
import styles from './style.module.css'

const GroupList = ({groups} : {groups : IGroup[]}) => {
    return (
        <div className={styles.groups__list__wrapper}>
            {groups.map(group =>
            <Group group={group} key={group.id}/>
            )}
        </div>
    );
};

export default GroupList;