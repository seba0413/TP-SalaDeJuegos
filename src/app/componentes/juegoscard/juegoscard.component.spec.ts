import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoscardComponent } from './juegoscard.component';

describe('JuegoscardComponent', () => {
  let component: JuegoscardComponent;
  let fixture: ComponentFixture<JuegoscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
