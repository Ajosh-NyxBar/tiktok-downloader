const TikTokVideo = ({ videoData }) => {
    const {
      video: { noWatermark, durationFormatted, ratio },
      music: { playUrl },
    } = videoData;
  
    const downloadFile = async (url, filename) => {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div className="tiktok-video-container">
        <div className="video-info">
          <div className="video-container">
            <video controls>
              <source src={noWatermark} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Duration: {durationFormatted}</p>
          <p>Ratio: {ratio}</p>
          <div className="download-buttons">
            <button className="download-button" onClick={() => downloadFile(noWatermark, `${videoData.video.title}.mp4`)}>Download Video</button>
            <button className="download-button" onClick={() => downloadFile(playUrl, `${videoData.music.title}.mp3`)}>Download Music</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TikTokVideo;