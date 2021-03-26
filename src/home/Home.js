
import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="m-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 p-4">
                    <h1 className="text-3xl mb-8 text-gray-800">
                        Easily  Generate
                        <br/><span className="text-green-400">OpenGraph Social Cards
                        <span role="img" aria-label="Rocket Emoji">🚀</span></span>
                    </h1>

                    <p className="mb-12">Quickly and easly generate stylish social cards for your articles with no fuss.</p>
                    <Link to="/signup" className="rounded-lg px-4 bg-green-500 py-3 text-teal-500 text-white font-semibold shadow-md mr-4">
                        Sign Up
                    </Link>
                    <Link to="/profile" className="rounded-lg px-4 bg-white py-3 text-green-500 font-semibold shadow-md mr-4">
                        View Profile
                    </Link>
                </div>
                <div className="col-span-1 p-4">
                    <img className="shadow-md rounded-lg" src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="Example Card"/>
                </div>
            </div>
        </div>
    );
}

export default Home;