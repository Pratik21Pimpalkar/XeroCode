import Client from "@/components/clients/Client";
import Hero from "@/components/hero/Hero";
import SelfServices from "@/components/services/SelfServices";
import Service1 from "@/components/services/Services1";
import ToggleServices from "@/components/services/ToggleServices";
import WithoutVsWith from "@/components/services/WithoutVsWith";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <Hero />
      <Client />
      <Service1 />
      <ToggleServices />
      <WithoutVsWith/>
      <SelfServices/>
    </main>
  )
}
