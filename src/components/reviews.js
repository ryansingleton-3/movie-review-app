import React from 'react';


export default class Reviews extends React.Component {
    render() {
        return (
            <div className='card-body bg-light' id='reviews'>
                {this.props.reviews}
            </div>
        )
    }
}