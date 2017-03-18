const request = require('request');

exports.getImage = (search, page = 1) => {
  return new Promise((resolve, reject) => {
    let options = {
      url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,
      headers: { Authorization: 'Client-ID d7f3763197021af' },
      json: true,
    };
    let getPics = (err, response, body) => {
      if (!err && response.statusCode == 200) {
        body = body.data.filter(image => {
          if (!image.is_album) return image;
        }).map(image => {
          return {
            url: image.link,
            snippet: image.title,
            context: `https://imgur.com/${image.id}`
          };
        });
        resolve(body)
      }
    }
    request(options, getPics);
  });
};
