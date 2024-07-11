import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu02Component } from './menu-02.component';

describe('Menu02Component', () => {
  let component: Menu02Component;
  let fixture: ComponentFixture<Menu02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Menu02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
