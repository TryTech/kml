import { manipulator } from '../src';
import { KMLObject, Placemark } from '../src/interfaces';
import { kmlObject } from './mocks/kml-object';

const newPlacemark: Placemark = {
  name: 'New Location',
  Point: {
    coordinates: ['-123.123456789,38.123456789,0'],
  },
};

test('manipulator should add a new placemark', () => {
  const modifiedKML: KMLObject = manipulator(kmlObject, newPlacemark);

  expect(modifiedKML.kml.Document[0].Placemark).toHaveLength(2);
  expect(modifiedKML.kml.Document[0].Placemark[1].name).toBe('New Location');
});

test('manipulator should throw an error for invalid KML object', () => {
  expect(() => manipulator({} as unknown as KMLObject, newPlacemark)).toThrow(
    'Invalid KML object'
  );
  expect(() => manipulator(null as unknown as KMLObject, newPlacemark)).toThrow(
    'Invalid KML object'
  );
  expect(() =>
    manipulator({ kml: {} } as unknown as KMLObject, newPlacemark)
  ).toThrow('Invalid KML object');
});
