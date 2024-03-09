import * as groups from '../../groups.json'

export class GroupsService{
    static async getGroups(){
        setTimeout(() => {

        })

        if (response.result === 0 || !response.data){
            throw Error('Некорректный ответ сервера')
        }
        return response
}
}