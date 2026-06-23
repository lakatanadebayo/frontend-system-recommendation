import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRecommandationComponent } from './custom-recommandation.component';

describe('CustomRecommandationComponent', () => {
  let component: CustomRecommandationComponent;
  let fixture: ComponentFixture<CustomRecommandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomRecommandationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
