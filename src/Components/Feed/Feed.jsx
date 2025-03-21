import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../Data";
import moment from "moment";
import "./Feed.css";

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
                );
                const result = await response.json();
                if (result.items) setData(result.items);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {data.map((item) => (
                <Link
                    key={item.id}
                    to={`/video/${category}/${item.id}`} 
                    className="card"
                >
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>
                        {value_converter(item.statistics.viewCount)} views &bull;{" "}
                        {moment(item.snippet.publishedAt).fromNow()}
                    </p>
                </Link>
            ))}
        </div>
    );
};

const value_converter = (num) => {
    if (!num) return "0";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return num.toString();
};

export default Feed;
