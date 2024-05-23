import { convertKmlTextToObject, convertKmlFileToObject } from '../src';

describe('kml-to-object', () => {
  test('convertKmlTextToObject should parse kml text to object asynchronously', async () => {
    const kmlText = `
            <kml>
                <Document>
                    <name>Sample KML</name>
                    <Placemark>
                        <name>Sample Location</name>
                    </Placemark>
                </Document>
            </kml>
        `;
    const kml = await convertKmlTextToObject(kmlText);
    expect(kml).toBeDefined();
    expect(kml.kml.Document[0].name[0]).toBe('Sample KML');
    expect(kml.kml.Document[0].Placemark[0].name[0]).toBe('Sample Location');
  });

  test('convertKmlFileToObject should parse kml file to object asynchronously', async () => {
    const kml = await convertKmlFileToObject('test/mocks/sample.kml');
    expect(kml).toBeDefined();
    expect(kml.kml.Document[0].name[0]).toBe('Sample KML');
    expect(kml.kml.Document[0].Placemark[0].name[0]).toBe('Sample Location');
  });

  test('convertKmlTextToObject should handle invalid kml text', async () => {
    const kmlText = 'invalid kml text';
    await expect(convertKmlTextToObject(kmlText)).rejects.toThrow(
      'Non-whitespace before first tag.'
    );
  });

  test('convertKmlFileToObject should handle file not found error asynchronously', async () => {
    await expect(
      convertKmlFileToObject('tests/mocks/nonexistent.kml')
    ).rejects.toThrow('ENOENT');
  });
});
