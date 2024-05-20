import {writeFile} from 'fs';
import {Builder} from 'xml2js';

export const writer = (kmlObject: any, filePath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const builder = new Builder();
        const xml = builder.buildObject(kmlObject)

        writeFile(filePath, xml, (err) => {
            if (err) reject(err)
            
            resolve()
        })
    })
}