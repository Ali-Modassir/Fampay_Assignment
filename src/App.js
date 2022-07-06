import { useState, useEffect } from "react";
import style from "./App.module.css";
import VideoCard from "./components/VideoCard";

function App() {
  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const url = `${process.env.REACT_APP_API}/videos/getvideos?p=${currPage}`;
    fetch(url)
      .then((res) => {
        if (res.status == 200) return res.json();
        else throw new Error("Http status" + res.status);
      })
      .then((data) => {
        setCurrPage(data.page);
        setTotalPages(data.pageCount);
        setVideos(data.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currPage]);

  const searchVideos = () => {
    const url = `${process.env.REACT_APP_API}/videos/searchvideos`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: search }),
    };
    fetch(url, requestOptions)
      .then((res) => {
        if (res.status == 201) return res.json();
        else throw new Error("Http status" + res.status);
      })
      .then((data) => {
        setCurrPage(1);
        setTotalPages(1);
        setVideos(data.videos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.container}>
      <div className={style.header}>Dashboard</div>
      <div className={style.utils}>
        <input
          className={style.search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={style.btn} onClick={searchVideos}>
          Search🔍
        </button>
      </div>
      <div className={style.videosContainer}>
        {videos?.map((video, index) => {
          return (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              videoId={video.videoId}
            />
          );
        })}
      </div>
      <div className={style.footer}>
        <div
          className={style.prev}
          onClick={() => currPage != 1 && setCurrPage((prev) => prev - 1)}
        >
          Prev
        </div>
        <div className={style.curr}>{currPage}</div>
        <div
          className={style.next}
          onClick={() =>
            currPage != totalPages && setCurrPage((prev) => prev + 1)
          }
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default App;
