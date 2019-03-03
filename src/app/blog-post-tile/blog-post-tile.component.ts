import { Component, OnInit, Input, Output,EventEmitter, ViewChild } from '@angular/core';
import { DataModel } from '../data-model';
import  {TruncatePipe} from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  str:String;
  @Output() fullEventEmitter=new EventEmitter();
  @Input('modelArray') model:DataModel;

  constructor(public truncatePipe:TruncatePipe) { }
   ngOnInit(){
      this.str =this.model.description;
      this.model.description=this.truncatePipe.transform(this.str,2);
    
  }

  fullDescription(){
    this.model.description=this.str;
  }
  
  fav(){
      this.model.checkFav=!this.model.checkFav;
  }



  
  

  

}
