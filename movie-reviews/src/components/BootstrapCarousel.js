import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'

// Class that renders a carousel
export class BootstrapCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }

    selectionChange = (selectedIndex, event) => {
        this.props.onSelectionChanged(selectedIndex);
    }

    render() {  

        // create the carousel items
        let carouselItems = [];

        if (this.state.items) {
            carouselItems = this.state.items.map((item, index) => {
                return (
                <Carousel.Item key={index} style={{'width': '100%', 'height': '100%'}}>
                    <img style={{'width': '100%', 'height': '100%'}}
                        className="d-block"
                        src={item.image} />
                    <Carousel.Caption>
                        <h6>{item.caption}</h6>
                    </Carousel.Caption>                       
                </Carousel.Item>
            )});    
        }

        // return the carousel JSX with the carousel items inside it
        return (
            <div>
                <div className='container-fluid' >
                    <Carousel id={`Carousel-${this.props.id}`} interval={null} onSelect={this.selectionChange}>
                        {carouselItems}
                    </Carousel>
                </div>
            </div>  
            )  
    }  
}  

export default BootstrapCarousel;