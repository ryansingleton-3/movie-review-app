import React from 'react';
import ReviewForm from './review-form';
import Reviews from './reviews';



export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews

        };

        
    }

    render() {

        let reviews = [];
        if (this.state.reviews)
            for (let review of this.state.reviews) {
                reviews.push(<Reviews {...review} />);
            }

        return(
            <div className='container-fluid card bg-dark' id='movie'>
                <div className='container card-title text-white text-center'>
                    <h3 className='h3' id='movie-title'>{this.props.title}</h3>
                </div>
                <div className='container text-center'>
                    <img src={this.props.image} style= {{width: 250}} className="text-center border-dark img-fluid"></img>
                </div>
                <div>
                    <ReviewForm />
                </div>
                <div className='container'>
                    {reviews}
                </div>
            </div>
        )
    }
}