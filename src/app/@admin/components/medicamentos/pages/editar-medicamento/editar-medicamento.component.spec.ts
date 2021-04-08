import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedicamentoComponent } from './editar-medicamento.component';

describe('EditarMedicamentoComponent', () => {
  let component: EditarMedicamentoComponent;
  let fixture: ComponentFixture<EditarMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
