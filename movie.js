import React from 'react';
import Rating from './rating';
import Review from './review';
import ReviewList from './reviewList';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            id: props.id,
            title: props.title,
            poster: props.poster,
            summary: props.summary

        };
    }

    render() {
        return(
            <div className="row">
                <div className="card w-95">
                    <div className="card-header bg-dark text-white">
                        {this.state.title}
                    </div>
                    <br/>
                    <div className="card-header bg-light">
                        <img src={this.state.poster} width="500"/>
                    </div>
                    <br/>
                    <div className="card-body">
                        <h5><b>Synopsis</b></h5>
                        {this.state.summary}
                        <br/>
                        <br/>
                        <h4><b>Stars 0-5</b></h4>
                        <Rating />
                    </div>
                    <br/>
                    <div className="card-footer"> 
                    <h5><b>Leave a Review Here</b></h5>
                    <ReviewList />
                    <br></br>
                    <br></br>
                    </div>
                </div>
            </div>
        );
    }
}