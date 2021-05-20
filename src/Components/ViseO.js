import React from "react";
import Instagram from "./Slike/instagram.png";
import Facebook from "./Slike/facebook.jpg";
import Youtube from "./Slike/youtube.jpg";
import Wikipedia from "./Slike/wikipedia.png";

export default function ViseO({vise,sluzbeno,instagram,facebook,youtube,wikipedia}){
    return(
        <div className="sadrzaj">
            <h1>More about {vise}</h1>
            <center><a href={sluzbeno}>Official site</a></center><br></br>
            <div className="platforme">
                <a href={instagram}>
                    <img src={Instagram} className="logo"/>
                    Instagram
                </a>
            </div>
            <div className="platforme">
                <a href={facebook}>
                    <img src={Facebook} className="logo"/>
                    Facebook
                </a>
            </div>
            <div className="platforme">
                <a href={youtube}>
                    <img src={Youtube} className="logo"/>
                    Youtube
                </a>
            </div>
            <div className="platforme">
                <a href={wikipedia}>
                    <img src={Wikipedia} className="logo"/>
                    Wikipedia
                </a>
            </div>
        </div>
    );
}