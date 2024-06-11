import React from "react";
import "./styles.css";

const RatingBar = ({ rating, className = "", showLabel }) => {
    return <div className={"rating-bar" + className} style={{ height: `${rating * 10}px` }}>
        {showLabel && <div className="rating-label">
            {rating}
        </div>}
    </div>;
};

export default RatingBar;
