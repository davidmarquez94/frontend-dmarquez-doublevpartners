import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleVPartnersComponent } from './double-v-partners.component';

describe('DoubleVPartnersComponent', () => {
  let component: DoubleVPartnersComponent;
  let fixture: ComponentFixture<DoubleVPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleVPartnersComponent]
    });
    fixture = TestBed.createComponent(DoubleVPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
