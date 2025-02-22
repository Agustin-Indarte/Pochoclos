import React from 'react';
import CarruselPeliculas from '../CarruselPeliculas/CarruselPeliculas';

const Categorias = () => {
    return (
        <>
            <CarruselPeliculas categoriaId={28} titulo="EXTRA CRUJIENTES: Acción en cada mordida" />
            <CarruselPeliculas categoriaId={10751} titulo="MIXTAS: Gustos para compartir en familia" />
            <CarruselPeliculas categoriaId={35} titulo="SALADITAS: Te hacen estallar de risa" />
            <CarruselPeliculas categoriaId={10749} titulo="PUNTO CARAMELO: Dulces como todo romance" />
        </>
    );
};

export default Categorias;
