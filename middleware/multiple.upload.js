const multer = require('multer');
const storage = require('../config/multer');

const filesUpload = multer({
    storage: storage,
    // limits: {fileSize: 1024 * 1024 }
    }).fields([{
      name: 'image'
    }, {
      name: 'video'
    }]);

    module.exports = filesUpload;



    