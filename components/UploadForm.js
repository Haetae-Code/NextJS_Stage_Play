import React, {} from "react";
import AWS from "aws-sdk";

const UploadForm = ({ onFormSubmit }) => {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        onFormSubmit(selectedFile);
    };

    const handleUpload = async (file) => {
        try {
            const bucketName = "nextstagefolder1";
            const keyName = "uploaded-image.jpg";

            AWS.config.update({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION,
            });

            const s3 = new AWS.S3();

            const params = {
                Bucket: bucketName,
                Key: keyName,
                Body: file,
            };

            const uploadImageToS3 = () => {
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
            console.log("Image uploaded successfully. Image URL:", imageUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedFile = event.target.fileInput.files[0];
        handleUpload(selectedFile);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fileInput">Select an image:</label>
                <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    aria-labelledby="Image Upload"
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadForm;
