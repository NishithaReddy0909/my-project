import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1ListComponent } from './product1-list.component';

describe('Product1ListComponent', () => {
  let component: Product1ListComponent;
  let fixture: ComponentFixture<Product1ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product1ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
