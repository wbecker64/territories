import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryDetailsComponent } from './territory-details.component';

describe('TerritoryDetailsComponent', () => {
  let component: TerritoryDetailsComponent;
  let fixture: ComponentFixture<TerritoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
