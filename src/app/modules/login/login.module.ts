import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
const loginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [CommonModule, RouterModule.forChild(loginRoutes), FormsModule]
})
export class LoginModule { }
