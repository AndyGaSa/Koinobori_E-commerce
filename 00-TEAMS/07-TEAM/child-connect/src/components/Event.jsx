import React from 'react';
import { Link } from 'reacto-router-dom';

export default function Event() {
  return (
    <>
      <header>
        <h3>Titulo Evento</h3>
        <div>
          <img src="https://i.pinimg.com/474x/f1/4d/4b/f14d4b12e724307917957cef634f96e5.jpg" alt="icono localización" />
          <p>Localización</p>
        </div>
      </header>
      <section>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_F2Ro_cj9HwnQjk9srmJloh67yENzHwwrg&usqp=CAU" alt="icono tipo de evento" />
          <p>Tipo de Evento</p>
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/JrWThf-n-yDTxtzYjfwXCpyrs3uH2fsgQF4ukqU7gkZujM_ujXyJ6TvUZDwe3kEWeWEtD9fx4L6lFEOEWCQsidZigXiiyoRe7FgiA0fIxEdxyc8Lc1uh41HBBR_jce94DEWjWkgXLKD09SzbvAUydcPL" alt="icono con niños" />
          <p>Cantidad de niños</p>
        </div>
      </section>
        <footer className="Footer__to-visitor">
    <button type="button">Saber más...
    // TODO fix Link with correct info about id and key: <Link to={`/Detalles_Evento/${event.id}`} key={}></Link>
    </button>
        </footer>
    <footer className="Footer__to-user">
        <button type="button">Editar</button>
        <button type="button">Papelera</button>
    </footer>
    </>
  );
}
