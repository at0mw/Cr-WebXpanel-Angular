import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSignalsComponent } from './basic-signals.component';

describe('BasicSignalsComponent', () => {
  let component: BasicSignalsComponent;
  let fixture: ComponentFixture<BasicSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSignalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
