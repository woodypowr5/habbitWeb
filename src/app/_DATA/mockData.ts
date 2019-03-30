import { Activity } from "../shared/types/activity.model";
import { ActivityMetadata } from '../shared/types/activityMetadata';

const activities: Activity[] = [
  {
    name: 'Running',
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
    ],
    metadata: null
  },
  {
    name: 'Tennis',
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
    ],
    metadata: null
  },
  {
    name: 'Eating',
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
    description: 'Test',
    metadata: null
  },
  {
    name: 'Reading',
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
    ],
    metadata: null
  },
  {
    name: 'Sleeping',
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
    ],
    metadata: null
  }
];

export const MockData = {
  activities: activities
}
