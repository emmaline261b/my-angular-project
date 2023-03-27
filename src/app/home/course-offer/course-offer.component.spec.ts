import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOfferComponent } from './course-offer.component';

describe('CourseOfferComponent', () => {
  let component: CourseOfferComponent;
  let fixture: ComponentFixture<CourseOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
