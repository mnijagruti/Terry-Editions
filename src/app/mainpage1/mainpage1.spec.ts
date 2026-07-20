import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainpage1 } from './mainpage1';

describe('Mainpage1', () => {
  let component: Mainpage1;
  let fixture: ComponentFixture<Mainpage1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainpage1],
    }).compileComponents();

    fixture = TestBed.createComponent(Mainpage1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
