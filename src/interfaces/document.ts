import { Placemark } from './placemark';

export interface Document {
  name?: string;
  Placemark: Placemark[];
}
