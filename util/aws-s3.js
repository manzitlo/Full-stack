const aws = require('aws-sdk');
const fs = require('fs');
const config = require('../config/production');
const { addTimeStampToName } = require('../util/path');

const setS3Credentials = new aws.S3({
  accessKeyId: config.S3AccessKeyID,
  secretAccessKey: config.S3SecretAccessKey,
});

const s3ProfilePhotoParams = (req) => {
  return {
    ACL: 'public-read',
    Bucket: config.S3ProfilePhotoBucketName,
    Body: fs.createReadStream(req.file.path),
    Key: addTimeStampToName(req.file.originalname),
  };
};

const s3CustomerCoverImageParams = (req) => {
  return {
    ACL: 'public-read',
    Bucket: config.S3CoverImageBucketName,
    Body: fs.createReadStream(req.file.path),
    Key: addTimeStampToName(req.file.originalname),
  };
};

const s3CustomerVideoParams = (req) => {
  return {
    ACL: 'public-read',
    Bucket: config.S3VideoBucketName,
    Body: fs.createReadStream(req.file.path),
    Key: addTimeStampToName(req.file.originalname),
  };
};

const videoUrlGenerator = (fileName) => {
  return `${config.S3VideoUrlPrefix}/${fileName}`;
};

const productImageUrlGenerator = (fileName) => {
  return `${config.S3CoverImageUrlPrefix}/${fileName}`;
};

const profilePhotoUrlGenerator = (fileName) => {
  return `${config.S3ProfilePhotoUrlPrefix}/${fileName}`;
};

module.exports = {
  setS3Credentials,
  s3ProfilePhotoParams,
  s3CustomerCoverImageParams,
  s3CustomerVideoParams,
  profilePhotoUrlGenerator,
  videoUrlGenerator,
  productImageUrlGenerator,
};
