import React from "react";
import "./styles.css";

const RatingBar = ({ numberOfRatings, className = "", showLabel, rating }) => {
    return <div className={"rating-bar" + className} style={{ height: `${numberOfRatings * 10}px` }}>
        {showLabel && <div className="rating-label">
            {rating}
        </div>}
    </div>;
};

export default RatingBar;
