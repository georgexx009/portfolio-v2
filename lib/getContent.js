import path from 'path';
import fs from 'fs';

const contentDirectory = path.join(process.cwd(), 'content');

function getContent(fileName) {
  const fileNames = fs.readdirSync(contentDirectory);
  const file = fileNames.find(file => file === fileName);
  if (!file) return null;

  const filePath = path.join(contentDirectory, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
}
