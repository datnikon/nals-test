import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    private token?: string | null = null;
    private loginApiUrl = 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/login';
    constructor(private http: HttpClient, private router: Router) {
        this.setTokenValue();
    }
    public login(username: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.http.post(this.loginApiUrl, { username, password }).subscribe(
                (data: any) => {
                    if (data && data.token) {
                        this.token = data.token;
                        this.saveTokenToLocalStorage();
                        resolve();
                    } else {
                        alert('Thông tin đăng nhập không chính xác');
                        reject();
                    }
                })
        })
    }

    public getAuthorizationToken() {
        return this.token;
    }

    public isLogged(): boolean {
        return this.token !== null && this.token !== undefined && this.token !== '';
    }

    public logOut(): void {
        this.token = null;
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }

    private setTokenValue(): void {
        this.token = localStorage.getItem('Token');
    }

    private saveTokenToLocalStorage(): void {
        localStorage.setItem('Token', this.token ? this.token : '');
    }
}