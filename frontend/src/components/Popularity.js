import React from 'react'

const STARTS = {
    full: "★",
    empty: "☆",
}
const MAX_STARS = 10;

export default function Popularity({value}) {
    const fullStars = STARTS.full.repeat(value);
    const emptyStars = STARTS.empty.repeat(MAX_STARS - value);
    return (
        <div style={{fontSize: "1.5rem",color: "#f39c12"}}>
            {fullStars}{emptyStars}
        </div>
    )
}
