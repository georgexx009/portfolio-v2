import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

// get the path where markdown files are
const contentDirectory = path.join(process.cwd(), 'content');

// insert the name of the file
async function getContent(fileName) {
  // add extension of file
  const completeFileName = fileName + '.md';

  // get files name from content directory
  const fileNames = fs.readdirSync(contentDirectory);

  // confirm the the file exist
  const file = fileNames.find(file => file === completeFileName);
  if (!file)
    return {
      title: '',
      contentFormatHtml: '',
    };

  // get the path for the file
  const filePath = path.join(contentDirectory, file);

  // read file return a string in YAML Front matter format
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // convert YAML front matter into an object
  const matterResult = matter(fileContent);

  // use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentFormatHtml = processedContent.toString();

  return {
    contentFormatHtml,
    ...matterResult.data,
  };
}

export default getContent;
