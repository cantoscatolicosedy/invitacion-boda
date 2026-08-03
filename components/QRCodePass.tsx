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
  size={300}
  bgColor="#FFFFFF"
  fgColor="#000000"
  level="M"
/>
    </div>
  );
}