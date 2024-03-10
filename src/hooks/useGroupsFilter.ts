import {useMemo} from "react";
import {IGroup} from "../types/Groups";
interface Sort{
    privacy: string
    friends: string
    avatar:string
}
export const useSortedGroups = (groups : IGroup[], sort : Sort) => {
    const sortedGroups = useMemo(()=>{
        let result = [...groups]
        if (sort.privacy === 'closed'){
           result = result.filter((group) => group.closed)
        }
        if (sort.privacy === 'open'){
            result = result.filter((group) => !group.closed)
        }
        if (sort.friends === 'with friends'){
            result = result.filter((group) => group.friends)
        }
        if (sort.friends === 'without friends'){
            result = result.filter((group) => !group.friends)
        }
        if(sort.avatar && sort.avatar !== 'all'){
            result = result.filter((group) => group.avatar_color === sort.avatar)
        }
        return result
    },[groups, sort])
    return sortedGroups
}