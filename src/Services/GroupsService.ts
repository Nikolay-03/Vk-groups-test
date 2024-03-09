import {mockGroups} from "../mockGroups";
import {GetGroupsResponse, IGroup} from "../types/Groups";

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