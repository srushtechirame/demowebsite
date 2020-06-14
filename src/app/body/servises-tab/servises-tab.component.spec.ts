import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisesTabComponent } from './servises-tab.component';

describe('ServisesTabComponent', () => {
  let component: ServisesTabComponent;
  let fixture: ComponentFixture<ServisesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServisesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
