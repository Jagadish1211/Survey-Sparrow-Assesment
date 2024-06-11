import React  from "react";
import "./styles.css";
import RatingBar from "../RatingBar";

const y_axis_values = [10, 20, 30, 40, 50];


const GraphBox = ({ ratings }) => {
    return <div className="graph-box">
        {
            y_axis_values.map((value) => {
                return <div key={value} className={`graph-y-axis-values v${value}`}>{value}</div>
            })
        }

        {
            ratings.map(({rating, key}) => {
                return <RatingBar key={key} rating={rating} showLabel={true} />
            })
        }

        <RatingBar rating={50} showLabel={false} className="default-height" />
    </div>;
};

export default GraphBox;