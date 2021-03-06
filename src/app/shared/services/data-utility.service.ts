import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUtilityService {

  constructor() { }

  orderObjectsByProperty(objects: any[], propertyName: string) {
    return objects
      .slice()
      .sort(
        (firstObject, secondObject) => {
          return firstObject[propertyName] < secondObject[propertyName] ? -1 : 1;
        }
      );
  }
}
