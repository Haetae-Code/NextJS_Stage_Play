import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config({ path: "../../.env.local" });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const bucketName = process.env.AWS_S3_BUCKET_NAME;
      const region = process.env.AWS_REGION;
      const s3Client = new S3Client({
        region,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      });

      const selectedFile = req.file;
      const fileExtension = '.' + selectedFile.originalname.split('.').pop();
      const fileName = `${uuidv4()}${fileExtension}`;
      const uploadParams = {
        Bucket: bucketName,
        Key: fileName,
        Body: selectedFile.buffer,
        ACL: 'public-read',
        ContentType: selectedFile.mimetype,
      };

      const command = new PutObjectCommand(uploadParams);
      await s3Client.send(command);

      res.status(200).json({ message: `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}` });
    } catch (error) {
      console.error('이미지 업로드 오류:', error);
      res.status(500).json({ message: '이미지 업로드에 실패함' });
    }
  }
}
