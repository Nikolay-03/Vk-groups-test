import React, {useState} from 'react';
import styles from './style.module.css'
import {IGroup} from "../../types/Groups";
import Modal from "../UI/Modal/modal";
import FriendsList from "../FriendsList/FriendsList";

const Group = ({group}: { group: IGroup }) => {
    const [friendsModal, setFriendsModal] = useState<boolean>(false)
    return (
        <div className={styles.group__wrapper}>
            <div style={{
                backgroundColor: group.avatar_color,
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                marginBlock: 'auto',
                marginLeft: 10
            }}></div>
            <div className={styles.main_info}>
                <div style={{fontSize: 17, fontWeight: 600}}>{group.name}</div>
                <div className={styles.types__group}>
                    {group.closed ? <span>Тип приватности: закрытая</span> : <span>Тип приватности: открытая</span>}
                    {group.members_count && <span>Подписчики: {group.members_count}</span>}
                    {group.friends &&
                        <span onClick={() => setFriendsModal(true)} style={{cursor:'pointer'}}>Подписано друзей: {group.friends.length}</span>}
                    {group.friends && (
                        <Modal visible={friendsModal} setVisible={setFriendsModal}>
                            <FriendsList friends={group.friends}/>
                        </Modal>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Group;