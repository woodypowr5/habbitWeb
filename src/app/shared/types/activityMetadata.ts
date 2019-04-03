export interface ActivityMetadata {
    numDays: number;
    numRecords: number;
    firstRecordDate: Date;
    lastRecordDate: Date;
    standardDeviation: number;
    weeklyAverageDelta: number;
    globalAverage: number;
    longestRecordStreak: number;
    currentRecordStreak: number;
}
