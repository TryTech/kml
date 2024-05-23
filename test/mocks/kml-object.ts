import { KMLObject } from '../../src/interfaces';

export const kmlObject: KMLObject = {
  kml: {
    Document: [
      {
        name: 'Sample KML',
        Placemark: [
          {
            name: 'Sample Location',
            Point: {
              coordinates: ['-122.0822035425683,37.42228990140251,0'],
            },
          },
        ],
      },
    ],
  },
};
