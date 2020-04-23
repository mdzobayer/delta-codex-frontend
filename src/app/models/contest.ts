import { Type, Phase } from './enums';


export interface Contest {
    id: number;
    name: string;
    type: Type;
    phase: Phase;
    frozen: boolean;
    durationSeconds: number;
    startTimeSeconds: number;
    relativeTimeSeconds: number;
    preparedBy: string;
    websiteUrl: string;
    description: string;
    difficulty: number;
    kind: string;
    icpcRegion: string;
    country: string;
    city: string;
    season: string;
};
