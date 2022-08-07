var Scraper = require('images-scraper');
const { Plants } = require('../../models');

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

// Plants.update(
//   { img_url: 'a very different title now' },
//   { where: { _id: 1 } }
// )
//   .success(result =>
//     handleResult(result)
//   )
//   .error(err =>
//     handleError(err)
//   )



// for (var i = 0; i < 5; i++) {
//   let cName = Plants.findOne({
//     where: {
//       id: i
//     }
//   })

  // const cleanedName = cName({ plain: true });

  (async () => {
    const results = await google.scrape('orchid', 1);
    console.log('results', results);
  })();

