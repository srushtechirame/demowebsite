import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselUtilityComponent } from './carousel-utility.component';

describe('CarouselUtilityComponent', () => {
  let component: CarouselUtilityComponent;
  let fixture: ComponentFixture<CarouselUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
