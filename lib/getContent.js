import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

async function getContent(fileName) {
  const fileNames = fs.readdirSync(contentDirectory);
  const file = fileNames.find(file => file === fileName);
  if (!file) return null;

  const filePath = path.join(contentDirectory, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const matterResult = matter(fileContent);

  // use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}

export default getContent;
