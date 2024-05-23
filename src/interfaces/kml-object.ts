import { Document } from './document';

export interface KMLObject {
  kml: {
    Document: Document[];
  };
}
