import React from 'react';


export default class ReviewForm extends React.Component {
    



    render() {

        
        return (
            <div className="container text-center border border-white" id='review-form'>
                    <form id = 'review-form'>
                        <label htmlFor="review-text">Post a Review</label> <br></br>
                        <input type="text" name="review-text" id='review-text' placeholder='Write a review'></input><br></br>
                        <button className='btn btn-success' type='submit'>Submit Review</button>
                    </form>
                    <div className='text-center border border-white'>
                        <ul id='review-list'><h5 className='text-white text-center'>See All Reviews</h5>
                        
                        </ul>
                    </div>
            </div>
        )

        // const reviewForm = document.getElementById("review-form");

        // reviewForm.addEventListener("submit", (e) => {
        // e.preventDefault();
        // console.log('Form has been submitted');
        // })
    }
}

