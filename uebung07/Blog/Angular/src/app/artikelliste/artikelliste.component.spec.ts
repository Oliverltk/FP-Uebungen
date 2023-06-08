import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikellisteComponent } from './artikelliste.component';

describe('ArtikellisteComponent', () => {
  let component: ArtikellisteComponent;
  let fixture: ComponentFixture<ArtikellisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtikellisteComponent]
    });
    fixture = TestBed.createComponent(ArtikellisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
