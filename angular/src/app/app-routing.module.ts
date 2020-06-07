import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewReviewComponent } from './pages/review/new-review/new-review.component';


const routes: Routes = [{
  path: 'new-review',
  component: NewReviewComponent
}, {
  path: '',
  redirectTo: '/new-review',
  pathMatch: 'full'

}, {
  path: '**',
  component: NewReviewComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
