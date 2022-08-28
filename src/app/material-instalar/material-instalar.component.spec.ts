import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInstalarComponent } from './material-instalar.component';

describe('MaterialInstalarComponent', () => {
  let component: MaterialInstalarComponent;
  let fixture: ComponentFixture<MaterialInstalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialInstalarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialInstalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
