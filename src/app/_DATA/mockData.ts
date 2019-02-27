import { Activity } from "../shared/types/activity.model";
import { ActivityMetadata } from '../shared/types/activityMetadata';

const activities: Activity[] = [
  {
    name: 'Running',
    description: 'Test',
    records: [
      {
        date: new Date('February 17, 2019'),
        activityName: 'Runniing',
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        activityName: 'Running',
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        activityName: 'Running',
        value: 7
      }
    ]
  },
  {
    name: 'Tennis',
    description: 'Test',
    records: [
      {
        date: new Date('February 17, 2019'),
        activityName: 'Tennis',
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        activityName: 'Tennis',
        
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        activityName: 'Tennis',
        value: 7
      }
    ]
  },
  {
    name: 'Eating',
    records: [
      {
        date: new Date('February 17, 2019'),
        activityName: 'Eating',        
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        activityName: 'Eating',        
        
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        activityName: 'Eating',                
        value: 7
      }
    ],
    description: 'Test'
  },
  {
    name: 'Reading',
    description: 'Test',
    records: [
      {
        date: new Date('February 17, 2019'),
        activityName: 'Reading',                
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        activityName: 'Reading',                        
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        activityName: 'Reading',                        
        value: 7
      }
    ]
  },
  {
    name: 'Sleeping',
    description: 'Test',
    records: [
      {
        date: new Date('February 17, 2019'),
        activityName: 'Sleeping',                        
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        activityName: 'Sleeping',                                
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        activityName: 'Sleeping',                                
        value: 7
      }
    ]
  }
];

const activitiesMetadata: ActivityMetadata[] = [
  {
    activityName: 'Activity 1',
    numDays: 5,
    numRecords: 7,
    firstRecordDate: new Date('February 10, 2019'),
    lastRecordDate: new Date('February 20, 2019'),
    standardDeviation: 4.2,
    variablility: 3
  },
  {
    activityName: 'Activity 2',
    numDays: 5,
    numRecords: 7,
    firstRecordDate: new Date('February 10, 2019'),
    lastRecordDate: new Date('February 20, 2019'),
    standardDeviation: 4.2,
    variablility: 3
  },
  {
    activityName: 'Activity 3',
    numDays: 5,
    numRecords: 7,
    firstRecordDate: new Date('February 10, 2019'),
    lastRecordDate: new Date('February 20, 2019'),
    standardDeviation: 4.2,
    variablility: 3
  },
  {
    activityName: 'Activity 4',
    numDays: 5,
    numRecords: 7,
    firstRecordDate: new Date('February 10, 2019'),
    lastRecordDate: new Date('February 20, 2019'),
    standardDeviation: 4.2,
    variablility: 3
  },
  {
    activityName: 'Activity 5',
    numDays: 5,
    numRecords: 7,
    firstRecordDate: new Date('February 10, 2019'),
    lastRecordDate: new Date('February 20, 2019'),
    standardDeviation: 4.2,
    variablility: 3
  }  
]

export const MockData = {
  activities: activities,
  activitiesMetadata: activitiesMetadata
}
