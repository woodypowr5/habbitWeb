import { Record } from './record.model';
import { ActivityMetadata } from './activityMetadata';

export interface Activity {
    name: string;
    description: string;
    records?: Record[];
    metadata?: ActivityMetadata;
}
