import React from 'react';
import Group from "../Group/Group";
import {IGroup} from "../../types/Groups";
import styles from './style.module.css'

const GroupList = ({groups}: { groups: IGroup[] }) => {
    return (
        <div className={styles.groups__list__wrapper}>
            {groups.length > 0 ?
                groups.map(group =>
                    <Group group={group} key={group.id}/>
                )
                : <div style={{
                    fontSize: 40,
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 600
                }}>Группы не найдены</div>
            }
        </div>
    );
};

export default GroupList;