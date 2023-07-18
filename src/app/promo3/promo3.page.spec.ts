import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Promo3Page } from './promo3.page';

describe('Promo3Page', () => {
  let component: Promo3Page;
  let fixture: ComponentFixture<Promo3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Promo3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
