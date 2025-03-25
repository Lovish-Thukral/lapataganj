import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-2xl w-full max-w-lg mx-auto shadow-lg bg-white">
      <label className="cursor-pointer flex flex-col items-center gap-2">
        <UploadCloud className="w-12 h-12 text-gray-500" />
        <span className="text-gray-700">Click to upload a video</span>
        <input
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleVideoUpload}
        />
      </label>
      {preview && (
        <video controls className="mt-4 rounded-lg shadow-md w-full">
          <source src={preview} type={video.type} />
          Your browser does not support the video tag.
        </video>
      )}
      {video && (
        <p className="mt-2 text-sm text-gray-600">{video.name}</p>
      )}
    </div>
  );
}
