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
        <div>
            {fullStars}{emptyStars}
        </div>
    )
}
