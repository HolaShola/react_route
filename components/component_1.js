import React from 'react';

export default class Component_1 extends React.Component{
    render(){
        return (
            <div className='converter'>
                <h3>Mass converter</h3>
                <ChooseMe value={["g", "Kg", "T"]}/>
            </div>
        );
    }
}