import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnCarouselComponent } from './furn-carousel.component';

describe('FurnCarouselComponent', () => {
  let component: FurnCarouselComponent;
  let fixture: ComponentFixture<FurnCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
