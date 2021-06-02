import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from "./components/table/table.component";
import { UserHomePageComponent } from "./components/user-home-page/user-home-page.component";
import { UserService } from "./services/user.service";
const userRoutes: Routes = [
    {
        path: '',
        component: UserHomePageComponent,
    }
]
@NgModule({
    declarations: [UserHomePageComponent, TableComponent],
    providers: [UserService],
    imports: [CommonModule, RouterModule.forChild(userRoutes)]
})
export class UserModule { }
