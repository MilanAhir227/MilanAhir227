import React from "react";
import axios from "axios";
import moment from "moment";

const StorageEndpoints = "https://post-editor.b-cdn.net/";
const REGION = ""; // If German region, set this to an empty string: ''
const BASE_HOSTNAME = "storage.bunnycdn.com";
const HOSTNAME = REGION ? `${REGION}.${BASE_HOSTNAME}` : BASE_HOSTNAME;
const STORAGE_ZONE_NAME = "editor";
const ACCESS_KEY = "739ac7f3-cf86-4ed6-a1a788bee22a-32b5-4561";

async function FileUploader(event) {
  const file = event;
  if (!file?.type?.startsWith("image/")) {
    console.error("Only images are allowed.");
    return;
  }

  const currentTimestamp = moment().format("YYYYMMDD_HHmmss");
  const fileExtension = file.name.split(".").pop();
  const FILENAME_TO_UPLOAD = `image_${currentTimestamp}.${fileExtension}`;

  try {
    const response = await axios.put(
      `https://${HOSTNAME}/${STORAGE_ZONE_NAME}/${FILENAME_TO_UPLOAD}`,
      file,
      {
        headers: {
          AccessKey: ACCESS_KEY,
          "Content-Type": file.type,
        },
      }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
  }

  const imageUrl = `${StorageEndpoints}${FILENAME_TO_UPLOAD}`;


  return await imageUrl;
}

export default FileUploader;
