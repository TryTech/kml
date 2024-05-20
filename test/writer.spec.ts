import { chmodSync, mkdirSync, readFileSync, rmdirSync, unlinkSync } from "fs"
import {writer} from "../src"
import { kmlObject } from "./mocks/kml-object"
import { join } from "path"

describe("writer", () => {
    test("write should write KML file", async () => {
        const output = "test/mocks/output.kml"
        await writer(kmlObject, output)

        const writtenData = readFileSync(output, 'utf-8')
        expect(writtenData).toContain('<name>Sample KML</name>');
        expect(writtenData).toContain('<name>Sample Location</name>');

        unlinkSync(output);
    })

    test('writeKML should handle write error', async () => {
        const readOnlyDir = 'tests/mocks/readonly';
        mkdirSync(readOnlyDir, { recursive: true });
        chmodSync(readOnlyDir, 0o444);
      
        const outputPath = join(readOnlyDir, 'output.kml');
      
        await expect(writer(kmlObject, outputPath)).rejects.toThrow();
      
        chmodSync(readOnlyDir, 0o755);
        rmdirSync(readOnlyDir, { recursive: true });
    })
})