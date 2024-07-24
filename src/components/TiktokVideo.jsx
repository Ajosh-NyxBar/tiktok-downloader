const TikTokVideo = ({ videoData }) => {
    const {
      title,
      video: { noWatermark, durationFormatted, ratio },
      music: { play_url, title: musicTitle },
    } = videoData;
  
    const downloadFile = async (url, filename) => {
      alert("File sedang diunduh");
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
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-lg p-4">
            <video controls className="w-full rounded">
              <source src={noWatermark} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2">Duration: {durationFormatted}</p>
            <p>Ratio: {ratio}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-primary text-secondary p-2 rounded cursor-pointer hover:bg-gradientEnd"
                onClick={() => downloadFile(noWatermark, `${title}.mp4`)}
              >
                Download Video
              </button>
              <button
                className="bg-primary text-secondary p-2 rounded cursor-pointer hover:bg-gradientEnd"
                onClick={() => downloadFile(play_url, `${musicTitle}.mp3`)}
              >
                Download Music
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TikTokVideo;