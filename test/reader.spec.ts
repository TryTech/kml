import { reader } from '../src'

describe('reader', () => {
    test('reader should parse kml file asynchronously', async () => {
        const kml: any = await reader('test/mocks/sample.kml')
        expect(kml).toBeDefined();
        expect(kml.kml.Document[0].name[0]).toBe('Sample KML');
        expect(kml.kml.Document[0].Placemark[0].name[0]).toBe('Sample Location');
    })

    test('readKML should handle file not found error asynchronously', async () => {
        await expect(reader('tests/mocks/nonexistent.kml')).rejects.toThrow('ENOENT');
    });
})