const multer = require('multer');
const storage = require('../config/multer');

const filesUpload = multer({
    storage: storage,
    // limits: {fileSize: 1024 * 1024 }
    }).fields('files_upload'[
        { name: 'documents', maxCount: 1 },
        { name: 'videos', maxCount: 1  }
      ]);

    module.exports = filesUpload;