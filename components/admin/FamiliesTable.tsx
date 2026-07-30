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