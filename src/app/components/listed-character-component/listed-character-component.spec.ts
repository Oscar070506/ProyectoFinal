import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedCharacterComponent } from './listed-character-component';

describe('ListedCharacterComponent', () => {
  let component: ListedCharacterComponent;
  let fixture: ComponentFixture<ListedCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedCharacterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
