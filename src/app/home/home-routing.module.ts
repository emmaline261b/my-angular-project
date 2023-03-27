import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CourseOfferComponent } from './course-offer/course-offer.component';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'course-offer',
        component: CourseOfferComponent
      }, 
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }