import QRCodePass from "./QRCodePass";
type AccessPassProps = {
  familyName: string;
  familyCode: string;
  confirmedPlaces: number;
  maxPlaces: number;
  qrValue: string;
   tableNumber: number | null;
};

export default function AccessPass({
  familyName,
  familyCode,
  confirmedPlaces,
  maxPlaces,
  qrValue,
   tableNumber,
}: AccessPassProps){
  return (
    <div className="access-pass">

      <p className="pass-eyebrow">
        Pase de Acceso
      </p>

       {/* MONOGRAMA C & S */}

  <div className="pass-monogram">

  <div className="pass-monogram-frame">

    <span className="pass-monogram-letter">
      C
    </span>

    <span className="pass-monogram-ampersand">
      &
    </span>

    <span className="pass-monogram-letter">
      S
    </span>

  </div>

  <div className="pass-monogram-ornament">
    ✦
  </div>

</div>

      <h2 className="pass-title">
        Clara Iveth  & Salvador 
      </h2>

      <p className="pass-date">
        16 Julio 2027
      </p>

      <div className="pass-divider" />

      <h3 className="pass-family">
        {familyName}
      </h3>

      <p className="pass-info">
        Código:
        <strong> {familyCode}</strong>
      </p>

      <p className="pass-info">
        Asistentes:
        <strong>
          {" "}
          {confirmedPlaces} de {maxPlaces}
        </strong>
      </p>

      <p className="pass-info">
  Mesa:
  <strong> {tableNumber ?? "Por asignar"}</strong>
</p>

      <div className="pass-divider" />

      <div className="pass-qr-section">

  
  <div className="pass-qr-frame">
    <QRCodePass value={qrValue} />
  </div>

</div>

<div className="pass-footer">

  <span className="pass-footer-ornament">
    ✦
  </span>

  <p className="pass-message">
    Presente este pase
    <br />
    al ingresar al evento.
  </p>

</div>

    </div>
  );
}