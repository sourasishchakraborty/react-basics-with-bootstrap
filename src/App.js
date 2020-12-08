import React, { Component } from 'react';
import Card from './card';
import Jumbotron from './jumbotron';
import Navbar from './navbar';
class App extends Component {
    state = {  }
    render() { 
        return ( 

            <div>
                <Navbar/>
                <Jumbotron/>

                <div className="container">
                    <div className="row">
                        <div className="col-3"><Card title="Product #1"/></div>
                        <div className="col-3"><Card title="Product #2"/></div>
                        <div className="col-3"><Card title="Product #3"/></div>
                        <div className="col-3"><Card title="Product #4"/></div>
                    </div>
                </div>

            </div>
            
            //<div>Helloo</div>
         );
    }
}
 
export default App;