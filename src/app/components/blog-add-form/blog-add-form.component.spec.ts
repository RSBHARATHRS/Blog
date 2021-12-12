import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAddFormComponent } from './blog-add-form.component';

describe('BlogAddFormComponent', () => {
  let component: BlogAddFormComponent;
  let fixture: ComponentFixture<BlogAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
