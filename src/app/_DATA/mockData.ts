import { Activity } from "../shared/types/activity.model";
import { ActivityMetadata } from '../shared/types/activityMetadata';

const activities: Activity[] = [
  {
    name: 'Activity 1',
    description: 'Test',
    records: [
      {
        date: new Date('February 17, 2019'),
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        value: 7
      }
    ]
  },
  {
    name: 'Activity 2',
    description: 'Test',
    records: [
      {
        date: new Date('February 17, 2019'),
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        value: 7
      }
    ]
  },
  {
    name: 'Activity 3',
    records: [
      {
        date: new Date('February 17, 2019'),
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        value: 7
      }
    ],
    description: 'Test'
  },
  {
    name: 'Activity 4',
    description: 'Test',
    records: [
      {
        date: new Date('February 17, 2019'),
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
        value: 7
      }
    ]
  },
  {
    name: 'Activity 5',
    description: 'Test',
    records: [
      {
        date: new Date('February 17, 2019'),
        value: 5
      },
      {
        date: new Date('February 19, 2019'),
        value: 6
      },
      {
        date: new Date('February 20, 2019'),
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
