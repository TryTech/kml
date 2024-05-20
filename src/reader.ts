import {readFile} from 'fs';
import {parseString} from 'xml2js';

export const reader = (filePath: string) => {
    return new Promise((resolve, reject) => {
        readFile(filePath, (err, data) => {
            if (err) reject(err)

            parseString(data, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    })
}