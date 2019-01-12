import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branch'
})
export class BranchPipe implements PipeTransform {

  transform(data: any[], searchbranch: string ,s:any): any {
    if(!data||!searchbranch){
    return data;
    }
    else if(s=="karthik")
    {
    return data.filter(x=>x.Branch.toLowerCase().indexOf(searchbranch.toLowerCase())!==-1);
    }

    else if(s=="neelima")
    {
    return data.filter(x=>x.Date.toLowerCase().indexOf(searchbranch.toLowerCase())!==-1);
    }
    }
}
