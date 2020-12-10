const multer = require('multer');
const storage = require('../config/multer');

const filesUpload = multer({
    storage: storage,
    // limits: {fileSize: 1024 * 1024 }
    }).fields('files_upload'[
        { name: 'avatar', maxCount: 1 },
        { name: 'gallery', maxCount: 8 }
      ]);

    module.exports = filesUpload;