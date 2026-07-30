export type RSVPStatus =
  | "pending"
  | "confirmed"
  | "declined";

export type Family = {
  id: number;

  family_code: string;

  family_name: string;

  max_places: number;

  confirmed_places: number;

  rsvp_status: RSVPStatus;

  table_number: number | null;

  notes: string | null;

  qr_token: string | null;

  checked_in: boolean;

  checked_in_at: string | null;

  rsvp_at: string | null;
};