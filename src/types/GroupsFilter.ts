export interface GroupsFilterProps{
    filter : Filter
    setFilter: ({} : Filter) => void;
}
export interface Filter{
    sort: string
    query:string
}