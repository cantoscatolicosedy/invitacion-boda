"use client";

import "./admin.css";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import DashboardCards from "@/components/admin/DashboardCards";
import SearchBar from "@/components/admin/SearchBar";
import FamiliesTable from "@/components/admin/FamiliesTable";
import FamilyModal from "@/components/admin/FamilyModal";
import { useRouter } from "next/navigation";


import type { Family } from "@/types/family";

export default function AdminPage() {
  const [families, setFamilies] = useState<Family[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState<Family | null>(null);

  const router = useRouter();

 useEffect(() => {
  async function checkSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/login");
      return;
    }

    loadFamilies();
  }

  checkSession();
}, []);


 async function handleDelete(family: Family) {
  const ok = confirm(
    `¿Deseas eliminar la familia "${family.family_name}"?`
  );

  if (!ok) return;

  const { data, error } = await supabase
  .from("families")
  .delete()
  .eq("id", family.id)
  .select();

console.log("Data:", data);
console.log("Error:", error);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Familia eliminada correctamente");

  loadFamilies();
}

async function handleLogout() {
  await supabase.auth.signOut();
  router.replace("/login");
}

  async function loadFamilies() {
    const { data, error } = await supabase
      .from("families")
      .select("*")
      .order("family_name");

    if (error) {
      console.error(error);
      return;
    }

    setFamilies(data ?? []);
    console.log("Familias recargadas");
    setLoading(false);
  }
  

const filteredFamilies = families.filter((family) =>
  family.family_name.toLowerCase().includes(search.toLowerCase()) ||
  family.family_code.toLowerCase().includes(search.toLowerCase())
);

const totalFamilies = families.length;

const totalReserved = families.reduce(
  (sum, family) => sum + family.max_places,
  0
);

const totalConfirmed = families.reduce(
  (sum, family) => sum + family.confirmed_places,
  0
);

const pendingFamilies = families.filter(
  (family) => family.rsvp_status === "pending"
).length;

  return (
    <main style={{ padding: "40px" }}>
      <h1>Panel de Administración</h1>

      <button
  className="admin-btn"
  style={{ float: "right" }}
  onClick={handleLogout}
>
  Cerrar sesión
</button>

   <button
  className="admin-btn"
  onClick={() => {
    setSelectedFamily(null);
    setIsModalOpen(true);
  }}
>
  + Nueva familia
</button>

<DashboardCards
  totalFamilies={totalFamilies}
  totalReserved={totalReserved}
  totalConfirmed={totalConfirmed}
  pendingFamilies={pendingFamilies}
/>

<SearchBar
  value={search}
  onChange={setSearch}
/>

{loading ? (
  <p>Cargando...</p>
) : (
  <FamiliesTable
  families={filteredFamilies}
  onEdit={(family) => {
    setSelectedFamily(family);
    setIsModalOpen(true);
  }}
  onDelete={handleDelete}
/>
)}

<FamilyModal
  open={isModalOpen}
  family={selectedFamily}
  onClose={() => setIsModalOpen(false)}
  onSaved={() => {
    loadFamilies();
    setIsModalOpen(false);
  }}
/>
    </main>
  );
}