export const validateKML = (kmlObject: any): boolean => {
    return kmlObject && kmlObject.kml && kmlObject.kml.Document;
};
