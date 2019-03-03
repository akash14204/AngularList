import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DataModel} from '../data-model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public checkData:boolean=false;
  public modelArray:DataModel[]=[];
  constructor() { }

  ngOnInit() {
  }
  

  OnSubmitTile(t,d){
    this.modelArray.push(new DataModel(t.value,d.value));
    this.checkData=true;
  }
}
