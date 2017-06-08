import React from 'react';

export default function Component_2() {
    const repos = ['first', 'next', 'last'];
    return (
        <ul>
            {
                repos.map(repo => (<li key={repo}>{repo}</li>))
            }
        </ul>
    );
}