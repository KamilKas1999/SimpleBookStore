import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBookComponent } from './mini-book.component';

describe('MiniBookComponent', () => {
  let component: MiniBookComponent;
  let fixture: ComponentFixture<MiniBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
