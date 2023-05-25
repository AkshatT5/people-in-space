import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PeopleInSpace = () => {
    const [peopleInSpace, setPeopleInSpace] = useState([]);

    useEffect(() => {
        const fetchPeopleInSpace = async () => {
            try {
                const response = await axios.get('/api.open-notify.org/astros.json');
                setPeopleInSpace(response.data.people);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPeopleInSpace();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{background: "#1a202c"}}>
            <div className="w-full max-w-screen-md p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-indigo-800 from-50% via-black-500 via-30% to-purple-500 to-90%">
                <h1 className="text-4xl font-bold mb-4 text-white text-center font-serif tracking-wide">People in Space</h1>
                <div className="text-white text-center">
                    <p className="text-lg mb-4 font-sans leading-loose tracking-wide">
                        There are currently <span className="font-bold">{peopleInSpace.length}</span> people in space.
                    </p>
                    {peopleInSpace.map((person, index) => (
                        <div key={index} className="my-4">
                            <p className="text-lg font-sans leading-loose tracking-wide">
                                {person.name} is on board the {person.craft}.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeopleInSpace;
