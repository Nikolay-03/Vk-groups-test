export interface GroupsFilterProps{
    filter : Filter
    setFilter: ({} : Filter) => void;
    avatars:string[]
}
export interface Filter{
    sort: {
        privacy: "all" | "closed" | "open"
        friends: "all" | "with friends" | "without friends"
        avatar:string

    }
    query:string
}
