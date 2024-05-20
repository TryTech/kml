import {validateKML} from "../src"

const validKML = {
  kml: {
    Document: [
      {
        name: ["Sample KML"],
        Placemark: [
          {
            name: ["Sample Location"],
            Point: [
              {
                coordinates: ["-122.0822035425683,37.42228990140251,0"]
              }
            ]
          }
        ]
      }
    ]
  }
};

const invalidKMLNoDocument = {
  kml: {}
};

const invalidKMLNoPlacemark = {
  kml: {
    Document: [
      {
        name: ["Sample KML"]
      }
    ]
  }
};

test('validateKML should validate a correct KML object', () => {
  expect(validateKML(validKML)).toBe(true);
});

test('validateKML should throw an error for KML object without Document', () => {
  expect(() => validateKML(invalidKMLNoDocument)).toThrow('Invalid KML object');
});

test('validateKML should throw an error for KML object without Placemark', () => {
  expect(() => validateKML(invalidKMLNoPlacemark)).toThrow('Invalid KML object: Placemark is missing or empty');
});

test('validateKML should throw an error for null or undefined KML object', () => {
  expect(() => validateKML(null)).toThrow('Invalid KML object');
  expect(() => validateKML(undefined)).toThrow('Invalid KML object');
});
