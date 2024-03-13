import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtivoComponent } from './add-ativo.component';

describe('AddAtivoComponent', () => {
  let component: AddAtivoComponent;
  let fixture: ComponentFixture<AddAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAtivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
