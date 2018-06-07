let axios = require('axios');
let cheerio = require('cheerio');
let base_url = 'http://www.status77.in/2015/03/cool-whatsapp-status.html';


module.exports.getData = function getData(req,res) {
    axios.get(base_url).then((response) => {
        let $ = cheerio.load(response.data);
        let kurs = [];
        $('blockquote').each((i, elm) => {
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

