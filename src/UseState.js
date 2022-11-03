import React from "react";

function UseState() {
    const [error, setError]= React.useState(true);
    return (
        <div>
            <h2>Eliminar UseState</h2>
            <p>por favor escribe el codigo de seguridad </p>
            {error && (
                <p>error: el codigo es incorrecto</p>
            )}
            <input placeholder="codigo de seguridad"/>
            <button
                onClick={() => setError(!error) }
            >Comprobar</button>
        </div>
    )
}

export {UseState};
