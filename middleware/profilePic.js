const multer = require('multer');
const storage = require('../config/multer');

const singleUpload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 }
    }).single('profile_pic');

    module.exports = singleUpload;