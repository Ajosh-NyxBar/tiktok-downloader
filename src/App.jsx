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
    <div className="app-container">
      <header className="app-header">
        <h1>AJOSH VIDEO TIKTOK DOWNLOADER</h1>
      </header>
      <div className="search-container">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste TikTok video link here"
        />
        <button onClick={handleFetchVideoData}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="content-container">
        {videoData && <TikTokVideo videoData={videoData} />}
      </div>
      <div className="footer-buttons">
      </div>
    </div>
  );
};

export default App;