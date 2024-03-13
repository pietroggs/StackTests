import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAtivoComponent } from './edit-ativo.component';

describe('EditAtivoComponent', () => {
  let component: EditAtivoComponent;
  let fixture: ComponentFixture<EditAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAtivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
