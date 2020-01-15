const axios = require('axios')

module.exports = async function () {

    const api = 'https://kql.getkirby.com/api/query';

    const response = await axios.post(api, {
        query: 'page("notes").children',
        select: {
            title: true,
            text: 'page.text.kirbytext',
            slug: true,
            date: 'page.date.todate("d.m.Y")'
        }
    });

    return response.data.result.data;

}
