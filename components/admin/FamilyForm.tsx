"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import type { Family } from "@/types/family";

type Props = {
  family: Family | null;
  onSaved?: () => void;
};

export default function FamilyForm({
  family,
  onSaved,
}: Props) {
  const [form, setForm] = useState<Family>(

   
    
  family ?? {
    id: 0,
    family_code: "",
    family_name: "",
    max_places: 0,
    confirmed_places: 0,
    rsvp_status: "pending",
    table_number: null,
    notes: "",
    checked_in: false,
    qr_token: null,
checked_in_at: null,
rsvp_at: null,
  }
);
 const isNew = form.id === 0;

  useEffect(() => {
  if (family) {
    setForm(family);
  } else {
    setForm({
      id: 0,
      family_code: "",
      family_name: "",
      max_places: 0,
      confirmed_places: 0,
      rsvp_status: "pending",
      table_number: null,
      notes: "",
      checked_in: false,
      qr_token: null,
checked_in_at: null,
rsvp_at: null,
    });
  }
}, [family]);

  function updateField(
    field: keyof Family,
    value: string | number | boolean | null
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }


 async function saveFamily() {
  

  console.log("Formulario:", form);

  let data;
  let error;

  if (isNew) {
    const result = await supabase
      .from("families")
      .insert({
        family_code: form.family_code,
        family_name: form.family_name,
        max_places: form.max_places,
        confirmed_places: form.confirmed_places,
        rsvp_status: form.rsvp_status,
        table_number: form.table_number,
        notes: form.notes,
        checked_in: form.checked_in,
      })
      .select();

    data = result.data;
    error = result.error;

  } else {

    const result = await supabase
      .from("families")
      .update({
        family_name: form.family_name,
        max_places: form.max_places,
        confirmed_places: form.confirmed_places,
        rsvp_status: form.rsvp_status,
        table_number: form.table_number,
        notes: form.notes,
        checked_in: form.checked_in,
      })
      .eq("id", form.id)
      .select();

    data = result.data;
    error = result.error;
  }

  console.log("Data:", data);
  console.log("Error:", error);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Familia guardada correctamente");
  onSaved?.();
}
  
  return (
    <div className="family-form">

      <label>Código</label>
      <input
  value={form.family_code}
  disabled={!isNew}
  onChange={(e) =>
    updateField("family_code", e.target.value)
  }
/>

      <label>Familia</label>
      <input
        value={form.family_name}
        onChange={(e) =>
          updateField("family_name", e.target.value)
        }
      />

      <label>Lugares reservados</label>
      <input
        type="number"
        value={form.max_places}
        onChange={(e) =>
          updateField("max_places", Number(e.target.value))
        }
      />

      <label>Confirmados</label>
      <input
        type="number"
        value={form.confirmed_places}
        onChange={(e) =>
          updateField("confirmed_places", Number(e.target.value))
        }
      />

      <label>Mesa</label>
      <input
        type="number"
        value={form.table_number ?? ""}
        onChange={(e) =>
          updateField(
            "table_number",
            e.target.value === ""
              ? null
              : Number(e.target.value)
          )
        }
      />

      <label>Estado</label>

      <select
        value={form.rsvp_status}
        onChange={(e) =>
          updateField("rsvp_status", e.target.value)
        }
      >
        <option value="pending">Pendiente</option>
        <option value="confirmed">Confirmado</option>
        <option value="declined">No asistirá</option>
      </select>

      <label>Notas</label>

      <textarea
        value={form.notes ?? ""}
        onChange={(e) =>
          updateField("notes", e.target.value)
        }
      />

      <label className="check-row">
        <input
          type="checkbox"
          checked={form.checked_in ?? false}
          onChange={(e) =>
            updateField(
              "checked_in",
              e.target.checked
            )
          }
        />

        Check-in realizado
      </label>

      <div className="form-actions">
  <button
    type="button"
    className="admin-btn"
    onClick={saveFamily}
  >
    Guardar cambios
  </button>
</div>

    </div>
  );
}