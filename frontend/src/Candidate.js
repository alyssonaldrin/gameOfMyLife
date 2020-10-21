import React from 'react'
import Position from './components/Position';

export default function Candidate({candidate, position}) {
    const {name, votes} = candidate;
    return (
        <div>
            <Position>{position}</Position>
            {name} - {votes}
        </div>
    )
}
