import QRCode from "react-qr-code";

type QRCodePassProps = {
  value: string;
};

export default function QRCodePass({
  value,
}: QRCodePassProps) {
  return (
    <div className="qr-container">
      <QRCode
        value={value}
        size={180}
        bgColor="#ffffff"
        fgColor="#35152A"
        level="H"
      />
    </div>
  );
}