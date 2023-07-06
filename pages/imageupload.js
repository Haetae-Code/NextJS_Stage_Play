import React from 'react';
import UploadForm from '../components/UploadForm';
import AWS from 'aws-sdk';

const dotenv = require('dotenv');
dotenv.config();

const UploadPage = () => {
  const handleFormSubmit = (file) => {
    const bucketName = 'nextstagefolder1';
    const keyName = 'uploaded-image.jpg';
    handleUpload(file, bucketName, keyName);
  };

  const handleUpload = async (file, bucketName, keyName) => {
    try {
      AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
      });

      const s3 = new AWS.S3();

      const uploadImageToS3 = () => {
        const params = {
          Bucket: bucketName,
          Key: keyName,
          Body: file
        };

        return new Promise((resolve, reject) => {
          s3.upload(params, (error, data) => {
            if (error) {
              reject(error);
            } else {
              resolve(data.Location);
            }
          });
        });
      };

      const imageUrl = await uploadImageToS3();
      console.log('Image uploaded successfully. Image URL:', imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '16px' }}>Upload Image</h1>
      <UploadForm onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default UploadPage;