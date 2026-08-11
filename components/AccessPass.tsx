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

    <div className="monogram-frame">

      <span className="monogram-letter">
        C
      </span>

      <span className="monogram-ampersand">
        &
      </span>

      <span className="monogram-letter">
        S
      </span>

    </div>

    <div className="monogram-ornament">
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

      <p style={{ color: "white", fontSize: "12px", wordBreak: "break-all" }}>
  {qrValue}
</p>

      <QRCodePass value={qrValue} />
      <p className="pass-message">
      
        Presente este pase
        <br />
        al ingresar al evento.
      </p>

    </div>
  );
}