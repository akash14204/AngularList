import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataModel } from '../data-model';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import {HardCodeDataService} from '../hard-code-data.service'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  //instance of refrence tile will be provided to bloglistComponent.
  @ViewChildren("tile") blogPostTileComponent:QueryList<BlogPostTileComponent>
  i:number=0;
  public checkData: boolean = false;
  //public modelArray:DataModel[]=[];
  public modelArray2D: DataModel[][];

  constructor(public hardCodeDataService:HardCodeDataService) { }                                                                                                                                                       

  ngOnInit() {
    this.modelArray2D = this.hardCodeDataService.getData();   
  }


  start($event){
     this.i=$event;
  }
  // OnSubmitTile(t, d) {
  //   //this.modelArray.push(new DataModel(t.value, d.value));
  //   this.checkData = true;
  // }

  fullParentDesc(){
    this.blogPostTileComponent.forEach(e=>e.fullDescription());
  }
  
  favAll(){
    this.modelArray2D[this.i].forEach(e=>e.checkFav=true);
  }
  
}
