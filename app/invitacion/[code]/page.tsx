import Hero from "@/components/Hero";
import Parents from "@/components/Parents";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import RSVP from "@/components/RSVP";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";


type Props = {
  params: Promise<{
    code: string;
  }>;
};

export default async function InvitationPage({ params }: Props) {
  const { code } = await params;
  const { data } = await supabase
  .from("families")
  .select("family_code")
  .eq("family_code", code)
  .maybeSingle();

if (!data) {
  notFound();
}

  return (
    <main className="bg-[#35152A] text-white">
      <Hero />

      <Parents />

      <Story />

      <EventDetails />

      <DressCode />

      <RSVP familyCode={code} />
    </main>
  );
}