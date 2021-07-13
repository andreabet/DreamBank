import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBankAccountComponent } from './detail-bank-account.component';

describe('DetailBankAccountComponent', () => {
  let component: DetailBankAccountComponent;
  let fixture: ComponentFixture<DetailBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
