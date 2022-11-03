import { render } from "@testing-library/react";
import React from "react";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: true,
        };
    }

    render () {
        
        return (
            <div>
                <h2>Eliminar ClassState{this.props.name}</h2>
                <p>por favor escribe el codigo de seguridad </p>
                
                {this.state.error && (
                <p>error: el codigo es incorrecto</p>
                )}

                <input placeholder="codigo de seguridad"/>
                <button
                    onClick={()=>
                       this.setState(prevState => ({ error: !prevState.error }))
                    }
                >Comprobar</button>
            </div>
        )
    }
}

export {ClassState};