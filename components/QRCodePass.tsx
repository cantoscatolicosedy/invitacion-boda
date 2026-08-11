import QRCode from "react-qr-code";

type QRCodePassProps = {
  value: string;
};

export default function QRCodePass({ value }: QRCodePassProps) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "10px",
        background: "#FFF8ED",
        border: "1px solid #D4AF37",
      }}
    >
      <div
        style={{
          padding: "10px",
          background: "#FFFFFF",
          borderRadius: "8px",
        }}
      >
        <QRCode
          value={value}
          size={220}
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="M"
        />
      </div>
    </div>
  );
}