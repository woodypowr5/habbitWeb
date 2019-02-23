import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivityMetadata } from '../types/activityMetadata';

@Injectable({
  providedIn: 'root'
})
export class ActivityMetadataService {
  private activitiesMetadata: ActivityMetadata[] = [];
  activitiesMetadataChanged: BehaviorSubject<ActivityMetadata[]> = new BehaviorSubject([]);

  constructor() { 
    this.activitiesMetadataChanged.subscribe( activitiesMetadata => {
      this.activitiesMetadata = activitiesMetadata;
    });
    this.activitiesMetadataChanged.next(this.activitiesMetadata);
  }
}
