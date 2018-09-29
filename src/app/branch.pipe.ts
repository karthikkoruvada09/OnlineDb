import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branch'
})
export class BranchPipe implements PipeTransform {

  transform(data: any[], searchbranch: string): any {
    if(!data||!searchbranch){
    return data;
    }
    else
    {
    return data.filter(x=>x.Branch.toLowerCase().indexOf(searchbranch.toLowerCase())!==-1);
    }
    }
}
