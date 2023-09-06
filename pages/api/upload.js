import formidable from 'formidable';
import sharp from 'sharp';
import AWS from 'aws-sdk';
import fs from 'fs';


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('이미지 업로드 오류:', err);
        res.status(500).json({ message: '이미지 업로드에 실패했습니다.' });
        return;
      }

      const imageFile = files.file;
      const outputPath = `./public/uploads/${imageFile.name}`;


      try {
        await sharp(imageFile.path)
          .resize(800, 600)
          .webp()
          .toFile(outputPath);


        const fileStream = fs.createReadStream(outputPath);

        const uploadParams = {
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: `path/to/your/s3/folder/${imageFile.name}`,
          Body: fileStream,
        };

        s3.upload(uploadParams, (err, data) => {
          if (err) {
            console.error('S3 업로드 오류:', err);
            res.status(500).json({ message: 'S3 업로드에 실패했습니다.' });
          } else {
            console.log('S3 업로드 완료:', data.Location);


            fs.unlinkSync(outputPath);


            const imageUrl = data.Location;
            res.status(200).json({ message: '이미지가 성공적으로 업로드되었습니다.', imageUrl });
          }
        });
      } catch (error) {
        console.error('이미지 변환 오류:', error);
        res.status(500).json({ message: '이미지 변환에 실패했습니다.' });
      }
    });
  } else {
    res.status(405).end();
  }
}
