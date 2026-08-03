import QRCode from "react-qr-code";

type QRCodePassProps = {
  value: string;
};

export default function QRCodePass({ value }: QRCodePassProps) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: "20px",
        borderRadius: "12px",
        display: "inline-block",
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
  );
}