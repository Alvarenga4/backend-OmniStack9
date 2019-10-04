const multer = require('multer')
const path = require('path');

module.exports = {
  storage: multer.diskStorage({ // Utiliza o multer para salvar os arquivos
    destination: path.resolve(__dirname,'..', '..', 'uploads'), // Difine onde vai salvar o arquivo
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      cb(null, `${name}-${Date.now()}${ext}`); //Pega o nome do arquivo original, data e extensao. A data e para nao sobrepor as imagens
    },
  })
};