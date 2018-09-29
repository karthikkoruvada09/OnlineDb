import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from'@angular/forms';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent} from './home/home.component';
import { ContactComponent} from './contact/contact.component';

import {  StudentComponent} from './student/student.component';
import {  LoginComponent} from './login/login.component';
import { RouModule } from './rou/rou.module';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule} from "@angular/common/http";
import { LogoutstudentComponent } from './logoutstudent/logoutstudent.component';
import { SuccessComponent } from './success/success.component';
import { ProfileadminComponent } from './profileadmin/profileadmin.component';

import { NotificationsadminComponent } from './notificationsadmin/notificationsadmin.component';
import { ResultsadminComponent } from './resultsadmin/resultsadmin.component';
import { ResultsstudComponent } from './resultsstud/resultsstud.component';
import { NotificationsstudComponent } from './notificationsstud/notificationsstud.component';

import { ProfilestudComponent } from './profilestud/profilestud.component';
import { BranchPipe } from './branch.pipe';
import { DatePipe } from './date.pipe';















@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    
    AdminComponent,
    HomeComponent,
    ContactComponent,
    StudentComponent,
    LoginComponent,
    LogoutComponent,
    LogoutstudentComponent,
    SuccessComponent,
    ProfileadminComponent,
    
    NotificationsadminComponent,
    ResultsadminComponent,
    ResultsstudComponent,
    NotificationsstudComponent,
    
    ProfilestudComponent,
    
    BranchPipe,
    
    DatePipe,
    
    
   
    
    
    
    
  
    
  
   
   
   
  ],
  imports: [
    BrowserModule,
   
    FormsModule,
   
    RouModule,
    HttpClientModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
