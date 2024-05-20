import {manipulator} from "../src"
import { kmlObject } from "./mocks/kml-object"

const newPlacemark = {
    name: ["New Location"],
    Point: [
      {
        coordinates: ["-123.123456789,38.123456789,0"]
      }
    ]
};


test('manipulator should add a new placemark', () => {
    const modifiedKML: any = manipulator(kmlObject, newPlacemark);
  
    expect(modifiedKML.kml.Document[0].Placemark).toHaveLength(2);
    expect(modifiedKML.kml.Document[0].Placemark[1].name[0]).toBe('New Location');
  });
  
  test('manipulator should throw an error for invalid KML object', () => {
    expect(() => manipulator({}, newPlacemark)).toThrow('Invalid KML object');
    expect(() => manipulator(null, newPlacemark)).toThrow('Invalid KML object');
    expect(() => manipulator({ kml: {} }, newPlacemark)).toThrow('Invalid KML object');
  });