import React from 'react';
import styles from './style.module.css'
import {IGroup} from "../../types/Groups";
const Group = ({group} : {group: IGroup}) => {
    return (
        <div className={styles.group__wrapper}>
            <div style={{backgroundColor:group.avatar_color,borderRadius:"50%",width:"100px",height:"100px",marginBlock:'auto',marginLeft:10}}></div>
            <div className={styles.main_info}>
                <div style={{fontSize:17,fontWeight:600}}>{group.name}</div>
                <div className={styles.types__group}>
                    {group.closed? <span>Тип приватности: закрытая</span> : <span>Тип приватности: открытая</span>}
                    {group.members_count? <span>Подписчики: {group.members_count}</span> : null}
                    {group.friends? <span>Подписано друзей: {group.friends.length}</span> : null}
                </div>
            </div>
        </div>
    );
};

export default Group;