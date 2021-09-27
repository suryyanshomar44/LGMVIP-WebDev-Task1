import React from 'react'
import Menu from './Menu'


const Resources = () => {
    return (
        <div>
        <Menu/>
        

<div style={{ backgroundColor: 'black', height: 100 + "vh"}}>
        <div className="row dark text-center">
            
            <div className="col-12">
                <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
                <h3 className="heading"><u>Built with Care</u></h3>
                 
        <br/>
        <br/>
        <br/>
            </div>
            <div className="col-md-4">
                <h3>HTML-5</h3>
                <div className="feature">
                    <i className="fas fa-code fa-3x" style={{color: 'crimson'}}></i>
                </div>
                <p className="lead">Built with the Latest, Html 5</p>
            </div>
            <div className="col-md-4">
                <h3>CSS 3</h3>
                <div className="feature">
                    <i className="fab fa-css3 fa-3x" style={{color: 'crimson'}}></i>
                </div>
                <p className="lead">Built with the latest, CSS 3</p>
            </div>
            <div className="col-md-4">
                <h3>React</h3>
                <div className="feature">
                    <i className="fab fa-react fa-3x" style={{color: 'crimson'}}></i>
                </div>
                <p className="lead">Built with the latest, React</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Resources;