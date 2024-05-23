import { validateKML } from '../src';
import { KMLObject } from '../src/interfaces';

const validKML: KMLObject = {
  kml: {
    Document: [
      {
        Placemark: [
          {
            name: 'Sample Location',
            description: 'This is a sample location',
            Point: {
              coordinates: ['-122.0841430,37.4220060,0'],
            },
          },
        ],
      },
    ],
  },
};

const invalidKMLNoDocument: KMLObject = {
  kml: {
    Document: [],
  },
};

const invalidKMLNoPlacemark: KMLObject = {
  kml: {
    Document: [
      {
        Placemark: [],
      },
    ],
  },
};

test('validateKML should validate a correct KML object', () => {
  expect(validateKML(validKML)).toBe(true);
});

test('validateKML should throw an error for KML object without Document', () => {
  expect(() => validateKML(invalidKMLNoDocument)).toThrow('Invalid KML object');
});

test('validateKML should throw an error for KML object without Placemark', () => {
  expect(() => validateKML(invalidKMLNoPlacemark)).toThrow(
    'Invalid KML object: Placemark is missing or empty'
  );
});

test('validateKML should throw an error for null or undefined KML object', () => {
  expect(() => validateKML(null as unknown as KMLObject)).toThrow(
    'Invalid KML object'
  );
  expect(() => validateKML(undefined as unknown as KMLObject)).toThrow(
    'Invalid KML object'
  );
});
