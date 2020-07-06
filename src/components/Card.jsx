import React from 'react'

const Card = () => {
    return (
			<div class="card text-white bg-danger mb-3">
				<div class="card-header">Tenemos un Problema...</div>
				<div class="card-body">
					<h4 class="card-title">No encontramos al Artista</h4>
					<p class="card-text">
						No encontramos la información del artista, sin embargo sí encontramos la canción! it's something(?)
                        Intenta buscar otro!
                    </p>
				</div>
			</div>
		);
}

export default Card
