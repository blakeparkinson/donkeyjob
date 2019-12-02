const cheerio = require('cheerio')
const moment = require('moment')

function extractListingsFromHTML(html) {
  const $ = cheerio.load(html)
  const vacancyRows = $('#slider-latest-jobs .jobDetails a')

  const vacancies = []
  vacancyRows.each((i, el) => {
    // Extract information from each row of the jobs table
    let job = $(el)
      .children('h3')
      .text()
      .trim()
    let location = $(el)
      .children('p')
      .text()
      .trim()

    vacancies.push({ job, location })
  })

  return vacancies
}

module.exports = {
  extractListingsFromHTML
}
