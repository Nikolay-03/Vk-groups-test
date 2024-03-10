import React from 'react';
import {IUser} from "../../types/User";
import styles from "./style.module.css"
const FriendCard = ({friend} : {friend : IUser}) => {
    return (
        <div className={styles.friend__modal__wrapper}>
            <div className={styles.friend__avatar}></div>
            <div className={styles.friend__name}>
                <span>{friend.first_name}</span>
                <span>{friend.last_name}</span>
            </div>
        </div>
    );
};

export default FriendCard;