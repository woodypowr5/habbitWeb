import { Record } from './record.model';

export class Activity {
    name: string;
    description: string;
    records?: Record[];
}
