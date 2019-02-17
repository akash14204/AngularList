import { Component, OnInit, Input } from '@angular/core';
import { DataModel } from '../data-model';
@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() model:DataModel;
  constructor() { }

  ngOnInit() {
    
  }

  
  

  

}
