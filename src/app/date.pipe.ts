import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(data: any[], searchdate: string): any {
    if(!data||!searchdate){
    return data;
    }
    else
    {
    return data.filter(x=>x.Date.toLowerCase().indexOf(searchdate.toLowerCase())!==-1);
    }
    }

}
