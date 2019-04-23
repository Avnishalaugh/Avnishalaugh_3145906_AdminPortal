import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './home/feature/board/board.component';
import { StudentlistComponent } from './home/feature/studentlist/studentlist.component';
import { ViewstudentdataComponent } from './home/feature/studentlist/viewstudentdata/viewstudentdata.component';
import { EditstudentdataComponent } from './home/feature/studentlist/editstudentdata/editstudentdata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'login', component: LoginComponent },
    { path: 'home', canActivate :[AuthGuard], component: HomeComponent },
    { path: 'board', canActivate :[AuthGuard], component: BoardComponent },
    { path: 'studentsList', canActivate :[AuthGuard], component: StudentlistComponent  },
    { path: 'viewStudent/:student',  component: ViewstudentdataComponent },
    { path: 'editStudent/:student', component: EditstudentdataComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }