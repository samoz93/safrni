import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {
  
  @Input() text:string;
  @Input() iconClass:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
