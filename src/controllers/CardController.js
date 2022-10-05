const multer = require('multer');
const parser = multer({ dest: 'src/public/assets/cards/' });
const fs = require('fs');

module.exports = class CardController {
  static saveCard(req, res) {
    const model = req.body.model;

    parser.single('cardimg')(req, res, err => {
      if (err) {
        res.status(500).json({ error: 1, payload: err });
      } else {
        // tenta renomear o arquivo
        fs.renameSync(
          `./src/public/assets/cards/${req.file.filename}`,
          `./src/public/assets/cards/${model}.jpg`,
          function (err) {
            if (err) {
              throw err;
            } else {
              console.log('arquivo salvo e renomeado');
              
            }
          }
        );
      }
    });
  }
};
