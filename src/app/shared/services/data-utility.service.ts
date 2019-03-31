import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUtilityService {

  constructor() { }

  orderObjectsByProperty(objects: any[], propertyName: string) { // not verified correct, unit tests needed
    return objects
      .slice()
      .sort(
        function (firstObject, secondObject) {
          return firstObject[propertyName] < secondObject[propertyName] ? -1 : 1;
        }
      );
  }
}
