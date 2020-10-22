import React from 'react'
import Info from './Info';
import Name from './Name';
import Picture from './Picture';
import Position from './Position';
import Votes from './Votes';
import Percentage from './Percentage';
import Popularity from './Popularity';
import css from "./candidate.module.css";

export default function Candidate({candidate, position, previousVote, previousPercentage}) {
    const {id, name, votes, percentage, popularity} = candidate;

    const imageSource = `${id}.jpg`;

    return (
        <div className={css.flexRow}>
            <Position>{position}</Position>
            <Picture imageSource={imageSource} description={name} />
            <Info>
                <Name>{name}</Name>
                <Votes value={votes} previousVote={previousVote} />
                <Percentage value={percentage} previousPercentage={previousPercentage} />
                <Popularity value={popularity} />
            </Info>
        </div>
    )
}
