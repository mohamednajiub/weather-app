import React from 'react';


const AppHeader = () => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h1>instaweather</h1>
                    </div>
                    
                    <div className="col-6 measure-units">
                        <button type="button">C</button>
                        <button type="button">F</button>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default AppHeader