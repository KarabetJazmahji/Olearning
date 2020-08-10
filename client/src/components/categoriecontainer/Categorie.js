import React from 'react';


const categorie = (props) => {  // Functional component for displaying the course categorie 
        return(                 // It receives the props that containts the categorie information
            <div>
                <ul className="textAlign">
                    <li onClick={props.selected}>{props.label}</li>
                </ul>
            </div>
        )
}



export default categorie;