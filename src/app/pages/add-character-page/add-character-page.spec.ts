import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacterPage } from './add-character-page';

describe('AddCharacterPage', () => {
  let component: AddCharacterPage;
  let fixture: ComponentFixture<AddCharacterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCharacterPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCharacterPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
