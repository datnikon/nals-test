import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
    private userAPIUrl = 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/users';
    constructor(private http: HttpClient) { }

    public getUsers(page: number = 0): Promise<User[]> {
        return new Promise<User[]>((resolve) => {
            this.http.get<User[]>(this.userAPIUrl, page > 0 ? { params: { page: page } } : {}).subscribe(users => {
                resolve(users);
            })
        }
        )
    }
}