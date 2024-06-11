import React, {memo}  from "react";
import "./styles.css";
import RatingBar from "../RatingBar";

const y_axis_values = [10, 20, 30, 40, 50];
const ratingsArray =  [1,2,3,4,5];

const GraphBox = ({ ratings }) => {
    return <div className="graph-box">
        {y_axis_values.map((value) => {
                return <div key={value} className={`graph-y-axis-values v${value}`}>{value}</div>
            })
        }
        {ratingsArray.map((rating) => {
            return <RatingBar key={rating} numberOfRatings={ratings[rating]} showLabel={true} rating={rating} />

        })}

        <RatingBar numberOfRatings={50} showLabel={false} rating={null} className="default-height" />
    </div>;
};

export default memo(GraphBox);