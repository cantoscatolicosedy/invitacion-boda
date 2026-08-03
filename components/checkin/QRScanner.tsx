"use client";

import { Scanner } from "@yudiel/react-qr-scanner";

type Props = {
  onScan: (value: string) => void;
};

export default function QRScanner({ onScan }: Props) {
  return (
    <Scanner
      onScan={(result) => {
        if (result.length > 0) {
          onScan(result[0].rawValue);
        }
      }}
      onError={(error) => {
        console.error(error);
      }}
      constraints={{
        facingMode: "environment",
      }}
    />
  );
}