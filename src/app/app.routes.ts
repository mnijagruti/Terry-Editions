import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { Navbar } from './common/navbar/navbar';

export const routes: Routes = [
    {path:'',redirectTo:'mainpage',pathMatch:'full'},
    {path:'mainpage',component:Mainpage},
    {path:'main',component:Navbar}

];
