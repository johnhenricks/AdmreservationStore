import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Promo2Page } from './promo2.page';

describe('Promo2Page', () => {
  let component: Promo2Page;
  let fixture: ComponentFixture<Promo2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Promo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
