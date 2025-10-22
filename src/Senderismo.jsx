import React, { useState } from "react";
import "./style.css"; // asegúrate que el archivo esté en src

// Importación de imágenes locales (ajusta nombres si algo cambia)
import senderismo1 from "./img/senderismo1.jpeg";
import senderismo2 from "./img/senderismo2.jpeg";
import senderismo3 from "./img/senderismo3.jpg";
import img1 from "./img/img1.jpeg";

function Senderismo() {
  const [mostrar, setMostrar] = useState(false);

  const mostrarMensaje = () => {
    setMostrar(true);
  };

  return (
    <div>
      {/* Encabezado */}
      <header>
        <h1 id="titulo">Blog Walkers</h1>
      </header>

      <section>
        {/* Primer artículo */}
        <article className="post">
          <div>
            <h2>Iniciación en senderismo</h2>
            <p>
              En este apartado daremos una explicación sobre el senderismo, la
              naturaleza y cómo iniciar en este mágico mundo.
            </p>
            <img src={senderismo1} width="300" alt="Iniciación en senderismo" />
            <p>
              La conexión con la naturaleza es lo más importante.
              <br />
              El llegar a lugares llenos de paz y tranquilidad.
            </p>
          </div>
        </article>

        {/* Segundo artículo */}
        <article className="segundo">
          <div>
            <h2>¿Qué es el senderismo?</h2>
            <p>
              El senderismo lo defino como la capacidad de recorrer la naturaleza
              netamente con el poder de tu cuerpo, donde nos desconectamos del
              mundo cotidiano, adentrándonos en la naturaleza y retando los
              límites de nuestro cuerpo.
            </p>
            <img src={senderismo2} width="400" alt="Qué es el senderismo" />
            <p>
              He aquí la alegría de llegar a una cumbre, algo{" "}
              <strong>indescriptible</strong>.
            </p>
          </div>
        </article>

        {/* Tercer artículo */}
        <article
          className="post tercero"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            height: "380px",
          }}
        >
          <div>
            <h2>¿Cómo iniciar en este mágico mundo?</h2>
            <p>
              La verdad no hay mucha ciencia detrás del inicio en el senderismo;
              realmente todo parte de las ganas y la motivación que tengas de
              caminar, escalar, trepar y conquistar cerros y montañas.
            </p>
            <p>
              Debes tener en cuenta que los días que vayas a realizar senderismo,
              es indispensable evitar el consumo de bebidas alcohólicas o
              cualquier tipo de alucinógeno, ya que estos afectan directamente tu
              desempeño.
            </p>
            <img
              src={senderismo3}
              height="150"
              width="400"
              alt="Equipo de senderismo"
            />
            <p>
              La imagen nos muestra el equipaje que algunas veces llevamos al
              practicar el <strong>senderismo</strong> como pasatiempo.
            </p>
          </div>
        </article>
      </section>

      {/* Botón motivacional */}
      <button id="boton-mensaje" onClick={mostrarMensaje}>
        Mostrar mensaje motivacional
      </button>

      {mostrar && (
        <p
          id="mensaje"
          style={{
            color: "green",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          ¡El primer paso es el más difícil, pero también el más importante! 💪🌄
        </p>
      )}

      {/* Pie de página */}
      <footer>
        <article className="firma">
          <ul>
            <li>
              <a href="#titulo">Ir al comienzo</a>
            </li>
            <li>
              <a href="mailto:juancamilorb94@hotmail.com">Contáctame aquí</a>
            </li>
            <li>WhatsApp: 3245457423</li>
            <li>Copyright 2025</li>
          </ul>
        </article>
      </footer>
    </div>
  );
}

export default Senderismo;
