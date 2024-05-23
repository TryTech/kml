import { Point } from './point';

export interface Placemark {
  name?: string;
  description?: string;
  Point: Point;
}
