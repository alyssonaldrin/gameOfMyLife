import React, { useEffect, useState } from 'react'
import Candidates from './components/Candidates';
import Header from './components/Header';
import Spinner from './components/Spinner';

export default function App() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        setInterval(() => {
            fetch("http://localhost:8080/votes")
                .then(res => {
                    return res.json()
                }).then(json => {
                    setCandidates(json.candidates);
                })
        }, 1000);
    }, [])

    if (candidates.length === 0) {
        return (
            <Spinner description="Carregando..." />
        );
    }
    return (
        <div>
            <Header>Votação</Header>
            <Candidates candidates={candidates} />
        </div>
    )
}
