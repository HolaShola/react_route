import React from 'react';

export default class Component_2 extends React.Component{
    render(){
        return (
            <div className='converter'>
                <h3>Distance converter</h3>
                <ChooseMe value={["Cm", "Dm", "M"]}/>
            </div>
        );
    }
}