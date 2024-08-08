import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTVshowsComponent } from './all-tvshows.component';

describe('AllTVshowsComponent', () => {
  let component: AllTVshowsComponent;
  let fixture: ComponentFixture<AllTVshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTVshowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTVshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
