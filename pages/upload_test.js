import React, { useState } from 'react';
import { VStack, Button, Text, Link } from "@chakra-ui/react";
import axios from 'axios';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const [uploadedURI, setUploadedURI] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadMessage('');
    setUploadedURI('');
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        setUploadMessage('이미지 파일을 선택');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadMessage('이미지가 성공적으로 업로드 됨!');
        setUploadedURI(response.data.message);
      }
    } catch (error) {
      console.error('이미지 서버 전송 오류:', error);
      setUploadMessage('이미지 전송에 실패');
      setUploadedURI('');
    }
  };

  return (
    <VStack spacing={4}>
      <label htmlFor="fileInput">이미지 선택:</label>
      <input type="file" id="fileInput" onChange={handleFileChange} aria-labelledby="Image Upload" />
      <Button onClick={handleUpload}>업로드</Button>

      {uploadMessage && <Text>{uploadMessage}</Text>}
      
      {uploadedURI && (
        <VStack>
          <Text>업로드된 이미지 URL:</Text>
          <Link href={uploadedURI} target="_blank" rel="noopener noreferrer">
            {uploadedURI}
          </Link>
        </VStack>
      )}
    </VStack>
  );
};

export default UploadForm;
