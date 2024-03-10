export interface GroupsFilterProps{
    filter : Filter
    setFilter: ({} : Filter) => void;
    avatars:string[]
}
export interface Filter{
    sort: {
        privacy: string
        friends: string
        avatar:string

    }
    query:string
}
