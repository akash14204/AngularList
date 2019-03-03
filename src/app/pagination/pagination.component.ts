import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() eventEmitter=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  start(val){  
    this.eventEmitter.emit(val);
  }

}
