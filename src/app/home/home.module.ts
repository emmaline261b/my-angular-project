import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CourseOfferComponent } from './course-offer/course-offer.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    BlogComponent,
    ContactComponent,
    CourseOfferComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }