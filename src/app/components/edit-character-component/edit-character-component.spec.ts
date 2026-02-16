import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharacterComponent } from './edit-character-component';

describe('EditCharacterComponent', () => {
  let component: EditCharacterComponent;
  let fixture: ComponentFixture<EditCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCharacterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
