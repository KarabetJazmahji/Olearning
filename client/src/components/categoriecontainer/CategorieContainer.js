import React from 'react';
import Categorie from './Categorie';
import './categoriesStyle.css';

const categories = [                     // Array that holds the categories
    { label: 'Development'},
    { label: 'Business'},
    { label: 'Marketing'},
];

const categorieContainer = (props) =>{    // Functional component for managing the the categories 
    return(
            <div className="sectionContainer">
                <h2 className="textAlign">Categories</h2>
                <div className="categorieContainer">
                {categories.map(ctrl => (           // map function is used to call categorie component for each  
                <Categorie                          // categorie from the categories array above
                    key={ctrl.label} 
                    label={ctrl.label}
                    selected={() => props.categorieSelected(ctrl.label)}
                    link1={ctrl.link1}
                    link2={ctrl.link2}
                    link3={ctrl.link3}
                    link4={ctrl.link4}
                />
        ))}
        </div>
    </div>

    )
    
} 

export default categorieContainer;