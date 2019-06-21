import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
      console.log(searchText)
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.titulo.toLowerCase().includes(searchText)  || it.descripcion.toLowerCase().includes(searchText) ;
    });
   }
}