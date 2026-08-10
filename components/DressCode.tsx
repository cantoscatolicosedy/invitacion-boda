export default function DressCode() {
  return (
    <section className="dress-code-section">

      {/* Decoración floral */}
      <div className="dress-floral dress-floral-left" />
      <div className="dress-floral dress-floral-right" />

      <div className="dress-code-container">

        {/* ================================= */}
        {/* ENCABEZADO */}
        {/* ================================= */}

        <div className="dress-code-header">

          <p className="dress-eyebrow">
            Código de vestimenta
          </p>

          <div className="dress-divider">
            <span />
            <strong>✦</strong>
            <span />
          </div>

          <h2 className="dress-code-title">
            Formal
          </h2>

          <p className="dress-intro">
            Queremos que celebres este día tan especial
            con nosotros vistiendo tus mejores galas.
          </p>

        </div>


        {/* ================================= */}
        {/* CÓDIGO DE VESTIMENTA */}
        {/* ================================= */}

        <div className="dress-code-options">

          {/* ================================= */}
          {/* DAMAS */}
          {/* ================================= */}

          <div className="dress-option">

            <div className="dress-option-icon">
              ◇
            </div>

            <h3>
              Damas
            </h3>

            <p className="dress-style">
              Formal de noche
            </p>

            <p className="dress-detail">
              Vestido largo
            </p>

            <div className="dress-warning">
              <span className="dress-warning-title">
                BLANCO EXCLUSIVO DE LA NOVIA
              </span>

              <p>
                No colores pastel, blanco o beige,
                ni tonos que puedan parecer blancos.
              </p>
            </div>

          </div>


          {/* ================================= */}
          {/* CABALLEROS */}
          {/* ================================= */}

          <div className="dress-option">

            <div className="dress-option-icon">
              ◇
            </div>

            <h3>
              Caballeros
            </h3>

            <p className="dress-style">
              Formal de vestir
            </p>

            <p className="dress-detail">
              Formal vaquero completo
            </p>

            <div className="dress-warning">
              <span className="dress-warning-title">
                NO MEZCLILLA
              </span>

              <p>
                El código de vestimenta requiere
                un atuendo formal completo.
              </p>
            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* FRASE FINAL */}
        {/* ================================= */}

        <div className="dress-code-footer">

          <span>✦</span>

          <p>
            Elegancia y comodidad para disfrutar
            juntos de una noche inolvidable.
          </p>

        </div>

      </div>

    </section>
  );
}