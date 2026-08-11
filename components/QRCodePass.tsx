import QRCode from "react-qr-code";

type QRCodePassProps = {
  value: string;
};

export default function QRCodePass({ value }: QRCodePassProps) {
  return (
    <div className="qr-pass-frame">
      <div className="qr-pass-inner">
        <QRCode
          value={value}
          size={210}
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="M"
        />
      </div>
    </div>
  );
}