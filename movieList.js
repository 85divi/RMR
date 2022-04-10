import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="container">
                <Movie {...
                    {id: 1,
                        key: 1,
                        title: 'In Bruges (2008)', 
                        summary: 'Guilt-stricken after a job gone wrong, hitman Ray and his partner await orders from their ruthless boss in Bruges, Belgium, the last place in the world Ray wants to be.',
                        poster: 'https://i.imgur.com/24JmVI4.jpeg'}} />
                <Movie {...
                    {id: 2,
                        key: 2,
                        title: 'The Fall (2006)', 
                        summary: 'In a hospital on the outskirts of 1920s Los Angeles, an injured stuntman begins to tell a fellow patient, a little girl with a broken arm, a fantastic story of five mythical heroes. Thanks to his fractured state of mind and her vivid imagination, the line between fiction and reality blurs as the tale advances..',
                        poster: 'https://alternativemovieposters.com/wp-content/uploads/2016/04/ise_fall.jpg'}} />
                <Movie {...
                    {id: 3,
                        key: 3,
                        title: 'The Thing (1982)', 
                        summary: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
                        poster: 'https://ih1.redbubble.net/image.11036074.5085/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'}} />
                <Movie {...
                    {id: 4,
                        key: 4,
                        title: 'Sicario (2015)', 
                        summary: 'An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.',
                        poster: 'https://m.media-amazon.com/images/I/A1GdxURr+uL._AC_SL1500_.jpg'}} />   
            </div>
        );
    }
}