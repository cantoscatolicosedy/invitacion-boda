import FamilyForm from "./FamilyForm";
import type { Family } from "@/types/family";

type Props = {
  open: boolean;
  family: Family | null;
  onClose: () => void;
  onSaved: () => void;
};

export default function FamilyModal({
  open,
  family,
  onClose,
  onSaved,
}: Props) {
  if (!open) return null;
  

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar Familia</h2>

<div className="modal-body">
  <FamilyForm
    family={family}
    onSaved={onSaved}
  />
</div>

<div className="modal-footer">
  <button
    className="admin-btn"
    onClick={onClose}
  >
    Cerrar
  </button>
</div>
      </div>



    </div>
  );
}