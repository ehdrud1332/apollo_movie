import React from 'react';
import {gql, useQuery} from '@apollo/client';

const GET_MOVIES = gql`
    {
        movies{
            id
            medium_cover_image
        }
    }
`;

const Home = () => {

    const {loading, data} = useQuery(GET_MOVIES);
    if(loading){
        return "loading..."
    }
    if(data && data.movies) {
        return data.movies.map(m => <h1>{m.id}</h1>)
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;

