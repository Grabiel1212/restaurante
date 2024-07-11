import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservaSemiVIPComponent } from './listar-reserva-semi-vip.component';

describe('ListarReservaSemiVIPComponent', () => {
  let component: ListarReservaSemiVIPComponent;
  let fixture: ComponentFixture<ListarReservaSemiVIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarReservaSemiVIPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarReservaSemiVIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
