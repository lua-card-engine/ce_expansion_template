import { convertPNGToVTF, VTF_FORMATS } from 'png-to-vtf';
import { readdir } from 'fs/promises';
import { join, basename, extname } from 'path';

const designDir = '../design';
const outputDir = '../materials/card_engine/expansions/{{ EXPANSION_ID }}';

const files = await readdir(designDir);
const pngFiles = files.filter(file => extname(file).toLowerCase() === '.png');

console.log(`Found ${pngFiles.length} PNG files to convert...`);

for (const pngFile of pngFiles) {
  const inputPath = join(designDir, pngFile);
  const outputFile = basename(pngFile, '.png') + '.vtf';
  const outputPath = join(outputDir, outputFile);

  console.log(`Converting ${pngFile} -> ${outputFile}`);
  await convertPNGToVTF(inputPath, outputPath);
}

console.log('Done!');
