import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenRegexAngularComponent } from './gen-regex-angular.component';

describe('GenRegexAngularComponent', () => {
  let component: GenRegexAngularComponent;
  let fixture: ComponentFixture<GenRegexAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenRegexAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenRegexAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
