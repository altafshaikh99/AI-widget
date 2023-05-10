import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchAllComponent } from './catch-all.component';

describe('CatchAllComponent', () => {
  let component: CatchAllComponent;
  let fixture: ComponentFixture<CatchAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
