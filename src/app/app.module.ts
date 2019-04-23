import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import { MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { FeatureComponent } from './home/feature/feature.component';
import { StudentlistComponent } from './home/feature/studentlist/studentlist.component';
import { BoardComponent } from './home/feature/board/board.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { StudentDataService} from './home/feature/student-data.service';
import { ViewstudentdataComponent } from './home/feature/studentlist/viewstudentdata/viewstudentdata.component';
import { EditstudentdataComponent } from './home/feature/studentlist/editstudentdata/editstudentdata.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FeatureComponent,
    StudentlistComponent,
    BoardComponent,
    NavigationComponent,
    ViewstudentdataComponent,
    EditstudentdataComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [StudentDataService,ConfirmationDialogService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
