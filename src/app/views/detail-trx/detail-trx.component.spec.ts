import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTrxComponent } from './detail-trx.component';

describe('DetailTrxComponent', () => {
  let component: DetailTrxComponent;
  let fixture: ComponentFixture<DetailTrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
