import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const API_URL = "https://httpbin.org/post";
const API_METHOD = "POST";
const STATUS_IDLE = 0;
const STATUS_UPLOADING = 1;
const STATUS_SUCCESS = 2;

const Upload = () => {
  const navigateTo = useNavigate();
  const [files, setFiles] = React.useState([]);
  const [status, setStatus] = React.useState(STATUS_IDLE);

  const uploadFiles = (data) => {
    setStatus(STATUS_UPLOADING);

    fetch(API_URL, {
      method: API_METHOD,
      body: data,
    })
      .then((res) => res.json())
      .then(() => navigateTo("/preview"))
      .catch((err) => console.error(err));
  };

  const packFiles = (files) => {
    const data = new FormData();

    [...files].forEach((file, i) => {
      console.log("file is: ", file);
      data.append(`file-${i}`, file, file.name);
    });
    return data;
  };

  const handleUploadClick = () => {
    if (files.length) {
      const data = packFiles(files);
      uploadFiles(data);
    }
  };

  const renderFileList = () => (
    <ol>
      {[...files].map((f, i) => (
        <li key={i}>
          {f.name} - {f.type} - {f.path}
        </li>
      ))}
    </ol>
  );

  const renderButtonStatus = () =>
    status === STATUS_IDLE ? "Send to server" : "Uploading";

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      {renderFileList()}
      <Button
        onClick={handleUploadClick}
        disabled={status === STATUS_UPLOADING}
      >
        {renderButtonStatus()}
      </Button>
    </div>
  );
};

export default Upload;
