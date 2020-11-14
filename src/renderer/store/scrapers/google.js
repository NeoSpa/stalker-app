import axios from 'axios';
import cheerio from 'cheerio';

export const searchLevels = {
  light: 3,
  safe: 5,
  normal: 10,
  intrusive: 15,
  brute: 20,
  stalker: 30,
};

export function getSearchUri(textToSearch = '', page = 0) {
  const currentPage = page * 10;

  return `https://www.google.com.br/search?num=100&q=%40"${textToSearch}"&start=${currentPage}`;
}

export function doSearch() {
  const searchOptions = getSearchUri('grupozap.com', 1);
  const results = axios(searchOptions).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    return $('.BNeawe').find('div').text();
  });

  return results;
}
