let axios = require('axios');
let cheerio = require('cheerio');
let base_url = 'https://www.goodreads.com/quotes/tag/inspirational';


module.exports.getData = function getData(req,res) {
    axios.get(base_url).then((response) => {
        let $ = cheerio.load(response.data);
        let kurs = [];
        $('.quoteText').each((i, elm) => {
            kurs.push({
                quote: $(elm).text().replace(/\n/g, "").trim(),
            });
        });
        return (kurs);
    })
        .then((kurs) => {

            res.json(kurs);
        });
};

