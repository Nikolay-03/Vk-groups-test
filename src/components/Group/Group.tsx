import React from 'react';
import styles from './style.module.css'
import {IGroup} from "../../types/Groups";
const Group = ({group} : {group: IGroup}) => {
    return (
        <div className={styles.group__wrapper}>
            <div className={styles.main_info}>
                <div style={{fontSize:17,fontWeight:600}}>{group.name}</div>
                <div style={{color:"#8c8c8c",display:'flex',justifyContent:'space-between'}}>
                    {group.closed? <span>Тип приватности: закрытая</span> : <span>Тип приватности: открытая</span>}
                    {group.members_count? <span>Подписчики: {group.members_count}</span> : null}
                    {group.friends? <span>Подписано друзей: {group.friends.length}</span> : null}
                </div>
            </div>
            <div style={{backgroundColor:group.avatar_color,borderRadius:"50%",width:"3rem",height:"3rem",marginBlock:'auto',marginRight:10}}></div>
        </div>
    );
};

export default Group;