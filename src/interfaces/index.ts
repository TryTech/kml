export interface Point {
  coordinates: string;
}

export interface Placemark {
  name: string;
  description: string;
  Point: Point;
}

export interface Document {
  Placemark: Placemark[];
}

export interface KMLObject {
  kml: {
    Document: Document[];
  };
}
