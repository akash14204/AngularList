import { Pipe, PipeTransform } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var reduce=value.length>5?args:value.length;
    var concatenateReduce=value.length>5?value.substring(0,reduce).concat("..."):value;
    return concatenateReduce;
  }


}
