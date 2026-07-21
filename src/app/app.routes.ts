import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { Navbar } from './common/navbar/navbar';
import { Mainpage1 } from './mainpage1/mainpage1';
import { Try } from './try/try';

export const routes: Routes = [
    {path:'',redirectTo:'index',pathMatch:'full'},
    {path:'mainpage',component:Mainpage},
    {path:'index',component:Navbar},
    {path:'main1',component:Mainpage1},
    {path:'try',component:Try},



];
