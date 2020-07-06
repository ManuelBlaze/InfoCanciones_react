import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Formulario = ({setBusquedaLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const {artista, cancion} = busqueda;

    //Leer su contenido 
    const actualizarState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //consultar API
    const buscarInfo = (e) => {
        e.preventDefault();

        //Validacion
        if (artista.trim() === '' || cancion.trim() === '') {
            Swal.fire({
				title: "Error",
				text: "Ambos campos son obligatorios",
                icon: "error",
                confirmButtonColor: '#333'
            });
            return;
        }

        //Pasar al componente principal
        setBusquedaLetra(busqueda);
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInfo}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letras Canciones <a 
                                        href="https://github.com/ManuelBlaze/InfoCanciones_react" 
                                        target="_blank"     
                                        rel="noopener noreferrer"
                                    > <i className="fab fa-github"></i></a>
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text" 
                                            name="artista" 
                                            placeholder="Nombre Artista" 
                                            className="form-control"
                                            onChange={actualizarState}
                                            value={artista}
                                            />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input 
                                            type="text" 
                                            name="cancion" 
                                            placeholder="Nombre Cancion" 
                                            className="form-control"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

Formulario.propTypes = {
	setBusquedaLetra: PropTypes.func.isRequired
};

export default Formulario;
