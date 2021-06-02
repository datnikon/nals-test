import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from './components/registration/registration.component';
const userRoutes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    }
]
@NgModule({
    declarations: [RegistrationComponent],
    imports: [CommonModule, RouterModule.forChild(userRoutes)]
})
export class RegistrationModule { }
