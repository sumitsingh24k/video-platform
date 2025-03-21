import React, { useEffect, useState } from "react";
import "./Recomended.css";
import { API_KEY } from "../../Data";
import { Link } from "react-router-dom";

const Recomended = ({ categoryId }) => {
    const [apidata, setApidata] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (loadMore = false) => {
        setLoading(true);
        try {
            const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=10&pageToken=${loadMore ? nextPageToken : ""}&key=${API_KEY}`;

            const response = await fetch(relatedVideoUrl);
            const data = await response.json();

            if (loadMore) {
                setApidata((prev) => [...prev, ...data.items]); // Append new data
            } else {
                setApidata(data.items);
            }
            setNextPageToken(data.nextPageToken || null);
        } catch (error) {
            console.error("Error fetching recommended videos:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className="recomended">
            {apidata.map((item, index) => (
                <Link
                    to={`/video/${item.snippet.categoryId}/${item.id}`}
                    key={index}
                    className="side-video-list"
                >
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="videoinfo">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{item.statistics.viewCount} Views</p>
                    </div>
                </Link>
            ))}

            {nextPageToken && (
                <button className="load-more-btn" onClick={() => fetchData(true)} disabled={loading}>
                    {loading ? "Loading..." : "Load More"}
                </button>
            )}
        </div>
    );
};

export default Recomended;
