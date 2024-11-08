import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterComponentComponent } from './character-component.component';

describe('CharacterCartComponent', () => {
  let component: CharacterComponentComponent;  
  let fixture: ComponentFixture<CharacterComponentComponent>;  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterComponentComponent]  
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterComponentComponent);  
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
