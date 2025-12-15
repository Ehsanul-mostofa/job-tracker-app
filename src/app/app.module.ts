import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobFormComponent } from './jobs/job-form/job-form.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobFormComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
