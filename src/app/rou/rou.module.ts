import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { AdminComponent } from '../admin/admin.component';
import { StudentComponent } from '../student/student.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { LogoutstudentComponent } from '../logoutstudent/logoutstudent.component';
import { SuccessComponent } from '../success/success.component';
import{ProfileadminComponent}from '../profileadmin/profileadmin.component';

import {NotificationsadminComponent}from '../notificationsadmin/notificationsadmin.component';
import{ResultsadminComponent}from '../resultsadmin/resultsadmin.component'
import { ProfilestudComponent } from '../profilestud/profilestud.component';
import { NotificationsstudComponent } from '../notificationsstud/notificationsstud.component';

import { ResultsstudComponent } from '../resultsstud/resultsstud.component';



@NgModule({
  imports:
    [
      RouterModule.forRoot([{ path: 'home', component: HomeComponent, children: [
        { path: 'about', component: AboutComponent },
         { path: 'contact', component: ContactComponent,children:[{path:"s",redirectTo:"/home/success"}]  }, 
         { path: 'admin', component: AdminComponent},
          { path: 'student', component: StudentComponent },
           { path: 'login', component: LoginComponent },
            { path: 'success', component: SuccessComponent },
             { path: 'home', redirectTo: '/home', pathMatch: 'full' }] },
      { path: 'logout', component: LogoutComponent, children: [{path:'proadmin',component:ProfileadminComponent,children:[{path:'lo',redirectTo:'/logout'}]},{path:'notiadmin',component:NotificationsadminComponent},{path:'resultadmin',component:ResultsadminComponent},{ path: 'logout1', redirectTo: '/home', pathMatch: 'full' }] },
      { path: 'logoutstudent', component: LogoutstudentComponent, children: [{path:'prostu',component:ProfilestudComponent,children:[{path:'logoutstu9',redirectTo:'/logoutstudent',pathMatch:'full'}]},{path:'notistu',component:NotificationsstudComponent},{path:'resultstu',component:ResultsstudComponent},{ path: 'logouts', redirectTo: '/home', pathMatch: 'full' }] },
      { path: '', redirectTo: '/home', pathMatch: 'full' },

      ])
    ],
  exports: [RouterModule]

})
export class RouModule { }
