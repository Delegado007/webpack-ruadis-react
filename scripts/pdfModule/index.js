const fs = require('mz/fs');
const { readPDFPageSizes } = require('pdf-toolz/PageSizes');

async function readPageSizes() {
  const pdf = await fs.readFile('test/portrait-singlepage.pdf');
  const pageSizes = await pdfPageSizes(pdf);
  console.log(pageSizes); // [PageSize(842, 595)]);
}

readPageSizes()