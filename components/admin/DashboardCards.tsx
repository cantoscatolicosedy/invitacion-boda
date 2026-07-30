type Props = {
  totalFamilies: number;
  totalReserved: number;
  totalConfirmed: number;
  pendingFamilies: number;
};

export default function DashboardCards({
  totalFamilies,
  totalReserved,
  totalConfirmed,
  pendingFamilies,
}: Props) {
  const cards = [
    {
      title: "Familias",
      value: totalFamilies,
    },
    {
      title: "Lugares Reservados",
      value: totalReserved,
    },
    {
      title: "Personas Confirmadas",
      value: totalConfirmed,
    },
    {
      title: "Pendientes",
      value: pendingFamilies,
    },
  ];

  return (
    <div className="admin-cards">
      {cards.map((card) => (
        <div className="admin-card" key={card.title}>
          <h3>{card.title}</h3>
          <span>{card.value}</span>
        </div>
      ))}
    </div>
  );
}