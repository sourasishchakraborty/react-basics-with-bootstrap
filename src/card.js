import React, { Component } from 'react';
class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="card">
            <img class="card-img-top" src="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"></img>
            <div class="card-body">
        <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
         );
    }
}
 
export default Card;