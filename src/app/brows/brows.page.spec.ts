import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowsPage } from './brows.page';

describe('BrowsPage', () => {
  let component: BrowsPage;
  let fixture: ComponentFixture<BrowsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
