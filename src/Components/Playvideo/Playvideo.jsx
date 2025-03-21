import React, { useEffect, useState } from "react";
import "./Playvideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY } from "../../Data";
import { useParams } from "react-router-dom";

const Playvideo = () => {
    const { videoId } = useParams();  // ✅ Fixed useParams usage

    if (!videoId) return <p>Error: No video selected.</p>;

    const [apidata, setApidata] = useState(null);
    const [channeldata, setChanneldata] = useState(null);

    // Fetch video details
    const fetchVideoData = async () => {
        try {
            const videoDetailUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
            const response = await fetch(videoDetailUrl);
            const data = await response.json();
            setApidata(data.items?.[0] || null);
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };

    // Fetch channel details
    const fetchChannelData = async () => {
        if (!apidata || !apidata.snippet) return;
        try {
            const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
            const response = await fetch(channelUrl);
            const data = await response.json();
            setChanneldata(data.items?.[0] || null);
        } catch (error) {
            console.error("Error fetching channel data:", error);
        }
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (apidata) {
            fetchChannelData();
        }
    }, [apidata]);

    return (
        <div className="playvideo">
            <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <h3>{apidata ? apidata.snippet.title : "Title here."}</h3>
            
            <div className="playinfo">
                <p>15M Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="like" /> 125k</span>
                    <span><img src={dislike} alt="dislike" /> 20k</span>
                    <span><img src={share} alt="share" /> Share</span>
                    <span><img src={save} alt="save" /> Save</span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img 
                    src={channeldata ? channeldata.snippet.thumbnails.default.url : ""} 
                    alt="publisher" 
                />
                <div>
                    <p>{apidata ? apidata.snippet.channelTitle : "sumit24k"}</p>
                    <span>{channeldata ? channeldata.statistics.subscriberCount : "1M"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vi-description">
                <p>{apidata ? apidata.snippet.description.slice(0, 200) : "Description Here"}</p>
                <hr />
                <h4>{apidata ? apidata.statistics.commentCount : "102"} Comments</h4>

                <div className="comments">
                    <img src={user_profile} alt="user" />
                    <div>
                        <h3>Playboi Carti <span>1 day ago</span></h3>
                        <p>I didn't know you could sing beautifully like that.</p>
                        <div className="comment-action">
                            <img src={like} alt="like" />
                            <span>244</span>
                            <img src={dislike} alt="dislike" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playvideo;
