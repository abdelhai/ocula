import type LOCATION from '../enums/forecast/location';
import UNITS from '../enums/forecast/units';
import type MAP from '../enums/maps/map';
import type FORECAST_SECTION from '../enums/forecast/section';

import type {
    ILocation
} from './location';

import type {
    IForecast
} from './weather';

export type Status = 'idle' | 'running' | 'error';

interface ISection {
    type: FORECAST_SECTION;
    visible: boolean;
    options?: any;
}

export interface IForecastSettings {
    sections: ISection[];
}

export interface IMapSettings {
    default: MAP;
    zoom: number;
    pitch: number;
    framerate: number;
}

export interface ISettings {
    version: number;
    units: UNITS;
    theme: string;
    location?: ILocation | LOCATION;
    locations?: ILocation[];
    forecast: IForecastSettings;
    maps: IMapSettings;
};

export interface IData {
    status: Status;
    lastUpdated: Date | null;
    location: ILocation | null;
    forecast: IForecast | null;
}