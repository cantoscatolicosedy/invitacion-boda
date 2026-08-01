import type { Family } from "@/types/family";

type Props = {
  families: Family[];
  onEdit: (family: Family) => void;
  onDelete: (family: Family) => void;
};

export default function FamiliesTable({
  families,
  onEdit,
  onDelete,
}: Props) {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Familia</th>
          <th>Teléfono</th>
          <th>Reservados</th>
          <th>Confirmados</th>
          <th>Estado</th>
          <th>Mesa</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {families.map((family) => (
          <tr key={family.id}>
            <td>{family.family_code}</td>
            <td>{family.family_name}</td>
            <td>{family.phone ?? "-"}</td>
            <td>{family.max_places}</td>
            <td>{family.confirmed_places}</td>
            <td>{family.rsvp_status}</td>
            <td>{family.table_number ?? "-"}</td>

          <td>
  <button
    className="admin-btn"
    onClick={() => onEdit(family)}
  >
    Editar
  </button>

<button
  className="admin-btn"
  style={{ marginLeft: "10px" }}
  onClick={() =>
    window.open(
      `/invitacion/${family.family_code}`,
      "_blank"
    )
  }
>
  Ver invitación
</button>

<button
  className="admin-btn"
  style={{ marginLeft: "10px", background: "#2d6cdf" }}
  onClick={async () => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/invitacion/${family.family_code}`
    );

    alert("Enlace copiado al portapapeles");
  }}
>
  Copiar enlace
</button>
<button
  className="admin-btn"
  style={{ marginLeft: "10px", background: "#25D366" }}
  onClick={() => {
  if (!family.phone) {
    alert("Esta familia no tiene teléfono registrado.");
    return;
  }

  const phone = `52${family.phone}`;

  const invitationLink =
    `${window.location.origin}/invitacion/${family.family_code}`;

  const message =
`Hola ${family.family_name}. 👋

Con mucha alegría queremos invitarlos a compartir uno de los días más importantes de nuestra vida. 💍✨

Hemos preparado una invitación personalizada para ustedes:

${invitationLink}

En ella encontrarán todos los detalles del evento y podrán confirmar su asistencia.

¡Será un honor contar con su presencia!`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}}
>
  WhatsApp
</button>
  <button
    className="admin-btn"
    onClick={() => onDelete(family)}
    style={{ marginLeft: "10px", background: "#b03232" }}
  >
    Eliminar
  </button>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}