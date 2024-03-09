export interface SelectProps{
    options: Option[]
    defaultValue:string
    value:string
    onChange: (option : Option) => void
}
interface Option{
    value:string
    name:string
}