import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    component.repo = {
      name: 'TestRepo',
      full_name: 'Test/TestRepo',
      html_url: 'https://www.google.com',
      description: 'Test repo with url leading to google.',
      forks_count: '1',
      stargazers_count: '2',
      open_issues_count: '3',
    };
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
