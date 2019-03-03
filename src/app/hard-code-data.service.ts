import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodeDataService {

  constructor() { }

  modelArray2D = [
    [
      { title: "a", description: "aaaaaaaaa" },
      { title: "a", description: "aaaaaaaaa" },
      { title: "a", description: "aaaaaaaaa" },
      { title: "a", description: "aaaaaaaaa" }    
    ],
    [
      { title: "b", description: "bbbbbbbbb" },
      { title: "b", description: "bbbbbbbbb" },
      { title: "b", description: "bbbbbbbbb" },
      { title: "b", description: "bbbbbbbbb" }
    ], 
    [
      { title: "c", description: "bbbbbbbbb" },
      { title: "c", description: "bbbbbbbbb" },
      { title: "c", description: "bbbbbbbbb" },
      { title: "c", description: "bbbbbbbbb" }
    ],
    [
      { title: "d", description: "ddddddddd" },
      { title: "d", description: "ddddddddd" },
      { title: "d", description: "ddddddddd" },
      { title: "d", description: "ddddddddd" }
    ]
  ];
  
  getData(){
    return this.modelArray2D;
  }
}
