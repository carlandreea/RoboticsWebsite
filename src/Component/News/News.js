import { Component } from "react";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './News.css'

class MultiItems extends Component{
    render(){
        const settings = {
            dots : true,
            infinite: true,
            speed: 50,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return(
            <>
                <div class='bg-black'>
                    <div class='robotics p-6'>
                        <h1 class='align-center mb-2'>Latest News</h1>
                        <div class='slide-container swiper'>
                            <div class='slide-content'>
                                <div class='card-wrapper swiper-wrapper'>
                                    <Slider {...settings}>
                                    <div class='card swiper-slide'>
                                            <div class='image-content'>
                                                <span class='overlay'></span>
                                                
                                                <div class='card-image rob-1'>
                                                    <img src='https://i.natgeofe.com/n/ec7702d4-7ca0-4942-9b65-a8eabdc34f2e/03_sophia_gds_Sophia_D026_3x4.jpg' alt='' className='card-img'/>
                                                </div>
                                            </div>
                                            <div class='card-content'>
                                                <h2 class='name'>David Dell</h2>
                                                <p class='description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aliquam commodi eius tempora praesentium fugit nihil quia dolor.</p>
                                                
                                                <button class='btn btn-success'>View More</button>
                                            </div>
                                         </div>
                                        <div class='card swiper-slide'>
                                            <div class='image-content'>
                                                <span class='overlay'></span>
                                                
                                                <div class='card-image rob-1'>
                                                    <img src='https://media.gettyimages.com/photos/the-humanoid-robot-sophia-developed-by-hong-kong-based-company-hanson-picture-id1201673379?s=612x612' alt='' className='card-img'/>
                                                </div>
                                            </div>

                                            <div class='card-content'>
                                                <h2 class='name'>David Dell</h2>
                                                <p class='description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aliquam commodi eius tempora praesentium fugit nihil quia dolor.</p>
                                                
                                                <button class='btn btn-success'>View More</button>
                                            </div>
                                         </div>
                                         <div class='card swiper-slide'>
                                            <div class='image-content'>
                                                <span class='overlay'></span>
                                                
                                                <div class='card-image rob-1'>
                                                    <img src='https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/3I7VZRIVX7R5M2SQSPLEBK7AR4.jpg' alt='' className='card-img'/>
                                                </div>
                                            </div>

                                            <div class='card-content'>
                                                <h2 class='name'>David Dell</h2>
                                                <p class='description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aliquam commodi eius tempora praesentium fugit nihil quia dolor.</p>
                                                
                                                <button class='btn btn-success'>View More</button>
                                            </div>
                                         </div>    
                                             <div class='card swiper-slide'>
                                                <div class='image-content'>
                                                <span class='overlay'></span>
                                                
                                                <div class='card-image rob-1'>
                                                    <img src='https://i.natgeofe.com/n/a045d87e-e200-456b-9de5-aa455300da03/12_sophia_gds_Sophia_D029_2x3.jpg' alt='' className='card-img'/>
                                                </div>
                                            </div>

                                            <div class='card-content'>
                                                <h2 class='name'>David Dell</h2>
                                                <p class='description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aliquam commodi eius tempora praesentium fugit nihil quia dolor.</p>
                                                
                                                <button class='btn btn-success'>View More</button>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
        }
}
export default MultiItems