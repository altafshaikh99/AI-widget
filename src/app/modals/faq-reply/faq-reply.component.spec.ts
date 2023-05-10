import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqReplyComponent } from './faq-reply.component';

describe('FaqReplyComponent', () => {
  let component: FaqReplyComponent;
  let fixture: ComponentFixture<FaqReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
