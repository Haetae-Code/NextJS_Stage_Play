import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { S3 } from 'aws-sdk';

const router = express.Router();
const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const storage = multer.memoryStorage(); 
const upload = multer({ storage });


router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: '파일이 없습니다.' });
    }

    const file = req.file;
    const outputPath = path.join(__dirname, 'public/uploads', file.originalname);


    fs.writeFileSync(outputPath, file.buffer);


    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `test/${file.originalname}`,
      Body: file.buffer,
    };

    s3.upload(uploadParams, (err, data) => {
      if (err) {
        console.error('S3 업로드 오류:', err);
        return res.status(500).json({ message: 'S3 업로드에 실패했습니다.' });
      }

      console.log('S3 업로드 완료:', data.Location);


      fs.unlinkSync(outputPath);

      const imageUrl = data.Location;
      return res.status(200).json({ message: '이미지가 성공적으로 업로드되었습니다.', imageUrl });
    });
  } catch (error) {
    console.error('파일 업로드 오류:', error);
    return res.status(500).json({ message: '파일 업로드에 실패했습니다.' });
  }
});

export default router;
