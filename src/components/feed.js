import React from 'react';
import Movie from './movie';
import Luca from './images/Luca.jpg'
import Encanto from './images/encanto.jpeg';
import Frozen from './images/Frozen.jpeg';
import Moana from './images/Moana.webp';
import Raya from './images/Raya-And-The-Last-Dragon.webp';
import Coco from './images/coco.webp';
import Inside from './images/Inside-Out.jpg';
import Tangled from './images/Tangled.webp';
import Zootopia from './images/Zootopia.webp';
import LegoBatman from './images/legobatman.jpg';
import Ralph from './images/wreckitralph.webp';
import BigHero6 from './images/bighero6.jpeg';


export default class Feed extends React.Component {
    
    


    render() {

        


        return (
            <div className='container-fluid h-100 bg-dark' id='feed'>
                <div className='row container-fluid'>
                    <div className='col-lg-3'>
                        <Movie image = {Luca} title = 'Luca' />
                    </div>
                    <div className='col-lg-3'>
                        <Movie image = {Encanto} title = 'Encanto' />
                    </div> 
                    <div className='col-lg-3'>
                        <Movie image = {Frozen}  title = 'Frozen' />
                    </div> 
                    <div className='col-lg-3'>
                        <Movie image = {LegoBatman} title = 'Lego Batman' />
                    </div>      
                </div>    
                <div className='row container-fluid'>
                    <div className='col-lg-3'>
                        <Movie image = {Moana} title = 'Moana' />
                    </div>
                    <div className='col-lg-3'>
                        <Movie image = {Raya} title = 'Raya' />
                    </div> 
                    <div className='col-lg-3'>
                        <Movie image = {Coco} title = 'Coco' />
                    </div> 
                    <div className='col-lg-3'>
                        <Movie image = {Ralph} title = 'Wreck-It Ralph' />
                    </div>      
                </div>
                <div className='row container-fluid'>
                    <div className='col-lg-3'>
                        <Movie image = {Inside} title = 'Inside-Out' />
                    </div>
                    <div className='col-lg-3'>
                        <Movie image = {Tangled} title = 'Tangled' />
                    </div> 
                    <div className='col-lg-3'>
                        <Movie image = {Zootopia} title = 'Zootopia' />
                    </div> 
                    <div className='col-lg-3'>
                        <Movie image = {BigHero6} title = 'Big Hero 6'/>
                    </div>      
                </div>  
            </div>
        )
    }

}