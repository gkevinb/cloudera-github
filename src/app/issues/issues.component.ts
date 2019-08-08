import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  @Input() issue: Object;

  constructor() { }

  ngOnInit() {
  }

}
