import React, { useEffect, useState } from 'react';

function useRandomJokes(firstName, lastName) {
    const [joke, setJoke] = useState('');

    //Custom Hook 
    useEffect(() => {
        const fetchJoke = async () =>
            await fetch(
                `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
            )
                .then((res) => res.json()).then((data) => {
                    // console.log(data.value.joke)
                    setJoke(data.value.joke);
                });

        fetchJoke();
    }, [firstName, lastName]);

    return joke;
}

export default useRandomJokes
