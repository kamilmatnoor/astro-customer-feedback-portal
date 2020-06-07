import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewService } from './services/review/review.service';
import { NewReviewComponent } from './pages/review/new-review/new-review.component';
import { ReviewComponent } from './pages/review/review.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReviewComponent,
    ReviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

