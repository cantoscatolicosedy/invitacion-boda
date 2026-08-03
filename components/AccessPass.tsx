import QRCodePass from "./QRCodePass";
type AccessPassProps = {
  familyName: string;
  familyCode: string;
  confirmedPlaces: number;
  maxPlaces: number;
  qrValue: string;
};

export default function AccessPass({
  familyName,
  familyCode,
  confirmedPlaces,
  maxPlaces,
  qrValue,
}: AccessPassProps){
  return (
    <div className="access-pass">

      <p className="pass-eyebrow">
        Pase de Acceso
      </p>

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

      <div className="pass-divider" />

      <QRCodePass value={qrValue} />
      <p className="pass-message">
      
        Presente este pase
        <br />
        al ingresar al evento.
      </p>

    </div>
  );
}