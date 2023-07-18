import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Promo1Page } from './promo1.page';

describe('Promo1Page', () => {
  let component: Promo1Page;
  let fixture: ComponentFixture<Promo1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Promo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
