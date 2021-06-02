import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth.guard";
import { AuthenInterceptor } from "./interceptors/authen.interceptor";
import { HttpErrorInterceptor } from "./interceptors/error-hander.interceptor";
import { AuthService } from "./services/auth.service";

@NgModule({
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthenInterceptor,
            multi: true
        }],
})
export class CoreModule {

}