import React from 'react';
import styles from './style.module.css'
import { GroupsFilterProps } from "../../types/GroupsFilter";
import Input from "../UI/Input/input";
import CustomSelect from "../UI/Select/select";

const FilterGroups = ({ filter, setFilter, avatars}: GroupsFilterProps) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск"
            />
            <CustomSelect
                value={filter.sort.privacy}
                onChange={(selectedSort) => {
                    if (selectedSort.value === "all" || selectedSort.value === "closed" || selectedSort.value === "open") {
                        setFilter({...filter, sort: {...filter.sort, privacy: selectedSort.value}})
                    }
                }}
                defaultValue="Приватность"
                options={[
                    { value: "all", name: "Все" },
                    { value: "open", name: "Открыта" },
                    { value: "closed", name: "Закрыта" }
                ]}
            />

            <CustomSelect
                value={filter.sort.friends}
                onChange={(selectedSort) => {
                    if (selectedSort.value === "all" || selectedSort.value === "with friends" || selectedSort.value === "without friends") {
                        setFilter({...filter, sort: {...filter.sort, friends: selectedSort.value}})
                    }
                }}
                defaultValue="Подписчики"
                options={[
                    { value: "all", name: "Все" },
                    { value: "with friends", name: "Есть друзья" },
                    { value: "without friends", name: "Нет друзей" },
                ]}
            />

            <CustomSelect
                value={filter.sort.avatar}
                onChange={(selectedSort) => {
                    if (selectedSort.value === "all") {
                        setFilter({...filter, sort: {...filter.sort, avatar: selectedSort.value}});
                    } else {
                        if(avatars.includes(selectedSort.value)) {
                            setFilter({...filter, sort: {...filter.sort, avatar: selectedSort.value}});
                        }
                    }
                }}
                defaultValue="Аватарки"
                options={[{ value: 'all', name: 'Все' }, ...avatars.map(avatar => {
                    return {value: avatar, name: avatar};
                })]}
            />

        </div>
    );
};

export default FilterGroups;
