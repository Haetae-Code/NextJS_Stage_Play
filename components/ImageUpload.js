import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  //[업로드 파일 선택 기능]
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  //[파일 업로드 기능] - 서버와 연결해야 하는데 백엔드 부탁해요!!!!!!!!!!!!!!!!!!!
  const handleUpload = () => {
    
  };

  return (
    <Box>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload} mt={2} disabled={!selectedFile}>
        Upload
      </Button>
    </Box>
  );
};

export default ImageUpload;