import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosListComponent } from './ativos-list.component';

describe('AtivosListComponent', () => {
  let component: AtivosListComponent;
  let fixture: ComponentFixture<AtivosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtivosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
