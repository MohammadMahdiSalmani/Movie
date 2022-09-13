import React from "react";

const Card = () => {
    return (
        <div className="card">
            <img src="" alt="Movie's Poster" className="card-thumbnail" />

                <div className="info">
                    <div>
                        <label className="card-name" title="">Movie's Name</label>
                        <label className="card-rate">IMDb: 8.4</label>
                        <label className="card-date">2021</label>
                    </div>
                    <a href="/" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="118.1 174.1 152 208 185.9 174.1" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><line x1="152" y1="128" x2="152" y2="208" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M80,128a80,80,0,1,1,144,48" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg></a>
                </div>
        </div>
    )
}

export default Card