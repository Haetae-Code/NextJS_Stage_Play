import AWS from "aws-sdk";

export const handler = async (event) => {
    const S3 = new AWS.S3();
    const bucketName = "nextstagefolder1";

    return {
        statusCode: 200,
        body: "Image uploaded successfully",
    };
};
