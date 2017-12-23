import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfJsonParseComponent } from './pdf-json-parse.component';

describe('PdfJsonParseComponent', () => {
  let component: PdfJsonParseComponent;
  let fixture: ComponentFixture<PdfJsonParseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfJsonParseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfJsonParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
