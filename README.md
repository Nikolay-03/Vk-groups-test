## Профильное задание - Frontend-разработчик в команду сообществ

Создайте простое react приложение, состоящее из одной страницы, которое при открытии будет запрашивать список групп с backend (замокайте ответ метода данными из файла `groups.json`).

Типизация ответа метода получения групп `GetGroupsResponse`:
```tsx
interface GetGroupsResponse {
  result: 1 | 0,
  data?: Group[]
}

interface Group {
  "id": number,
  "name": string,
  "closed": boolean,
  "avatar_color"?: string,
  "members_count": number,
  "friends"?: User[]
}

interface User {
  "first_name": string,
  "last_name": string
}
```

- Группа может быть закрытой или открытой.
- Группа может иметь аватарку в виде круга диаметром 100px с заливкой цветом, указанным в атрибуте avatar_color.
- Группа может содержать список ваших друзей, состоящих в ней.

После получения списка всех групп отобразите список на странице в произвольном виде. Отобразите в интерфейсе имя группы, аватарку, тип приватности (закрытая / открытая), кол-во подписчиков и кол-во друзей. При клике на кол-во друзей в блоке группы должен появиться блок с именем и фамилией каждого из друзей.

Если данных для отображения какого-то поля нет, его рисовать не нужно.

Над списком групп должен быть набор фильтров, позволяющий выбрать только нужные нам группы.

Мы должны иметь возможность отфильтровать группы по типу приватности (все / закрытая / открытая), по цвету аватарки (любой / все возможные значения из атрибута avatar_color), наличию друзей в группе

##### Учтите, что backend обрабатывает все запросы с задержкой в 1 секунду. Реализуйте эту задержку самостоятельно.
##### Метод так же может упасть в ошибку или вернуть `result: 0` или не вернуть поле `data`, что равносильно ошибке. Просто учтите это в коде.

## Реализация 
Создал приложение с помощью CRA по шаблону `typescript`.
Приложение состоит из одной страницы `Communities`.
Запросы осуществляются с помощью кастомного хука `useFetching` и метода `GetGroupsResponse`:
```ts
export const useFetching = <T>(callback: () => Promise<T>): [() => void, boolean, string] => {
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>('')
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        }
        catch (e: any){
            setError(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}

export class GroupsService {
    static async GetGroupsResponse(): Promise<GetGroupsResponse> {
        return new Promise<GetGroupsResponse>((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve({ result: 1, data: mockGroups});
                } catch (error) {
                    reject(error);
                }
            }, 1000);
        });
    }
}
```
Мок ответ backend  находится в файле `mockGroups.ts`.

В случае негативного ответа сервера в приложении выводится надпись: "Некорректный ответ сервера".

Все приложение также обернуто типизацией, основные типы находятся в папке `types`.
Фильтрация групп осуществляется по трем фильтрам: 
- Приватность. Тут мы можем выбрать Все/Открытая/Закрытая.
- Подписчики. Тут мы можем выбрать Все/Есть друзья/Нет друзей.
- Аватарки. Тут мы выбираем цвет аватарки Все/1 цвет из всех возможных цветов атрибута `avatar_color`.

Также можно найти группу по названию из строки поиска.
Если группы не найдены, то пишется: "Группы не найдены"
Вся фильтрация осуществляется с помощью кастомного хука `useGroupsFilter`:
```ts
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

export const useSortedAndSearchedGroups = (groups :IGroup[], sort : Sort, query : string) => {
    const sortedGroups = useSortedGroups(groups,sort)
    const sortedAndSearchedGroups = useMemo(() => {
        return sortedGroups.filter(group => group.name.toLowerCase().includes(query.toLowerCase()))
    },[sortedGroups, query, groups])
    return sortedAndSearchedGroups
}
```
Данный хук оптимизирован с помощью хука `useMemo` для кэширования отсортированных групп.

При нажатии на "Подписано друзей" в блоке группы всплывает модальное окно в котором отображены все друзья, подписанные на эту группу.
В сам блок группы грузятся только те данные, которые существуют у группы.

Стилизация приложения осуществлена с помощью css модулей для изоляции стилей

## Запуск проекта

`npm install`

`npm start`
