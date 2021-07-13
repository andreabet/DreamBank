import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrxComponent } from './list-trx.component';

describe('ListTrxComponent', () => {
  let component: ListTrxComponent;
  let fixture: ComponentFixture<ListTrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
