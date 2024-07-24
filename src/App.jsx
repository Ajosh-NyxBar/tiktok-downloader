import "./App.css";
import React, { useState } from "react";
import TikTokVideo from "./components/TiktokVideo";

const App = () => {
  const [videoData, setVideoData] = useState(null);
  const [url, setUrl] = useState("");

  const handleFetchVideoData = async () => {
    let processedUrl = url;

    if (!processedUrl.includes("tiktok.com")) {
      alert("Please enter a valid TikTok URL");
      return;
    }

    try {
      const apiUrl = `https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(
        processedUrl
      )}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setVideoData(data);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  const handleReset = () => {
    setVideoData(null);
    setUrl("");
  };

  return (
    <div className="bg-gradient-to-r from-gradientStart to-gradientEnd min-h-screen flex flex-col items-center">
      <header className="bg-primary text-secondary text-center p-5">
        <h1 className="font-irisGrover">AJOSH VIDEO TIKTOK DOWNLOADER</h1>
      </header>
      <div className="flex justify-center my-5">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste TikTok video link here"
          className="w-1/2 p-2 rounded border border-gray-300"
        />
        <button
          onClick={handleFetchVideoData}
          className="bg-primary text-secondary p-2 ml-2 rounded cursor-pointer hover:bg-gradientEnd"
        >
          Search
        </button>
        <button
          onClick={handleReset}
          className="bg-primary text-secondary p-2 ml-2 rounded cursor-pointer hover:bg-gradientEnd"
        >
          Reset
        </button>
      </div>
      <div className="flex justify-center my-5">
        {videoData && <TikTokVideo videoData={videoData} />}
      </div>
    </div>
  );
};

export default App;
