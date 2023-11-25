import Client from "@/components/clients/Client";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import NewsLetter from "@/components/newsletter/NewsLetter";
import BlueContainerService from "@/components/services/BlueContainerService";
import BulletWiseServices from "@/components/services/BulletWiseServices";
import SelfServices from "@/components/services/SelfServices";
import Service1 from "@/components/services/Services1";
import ToggleServices from "@/components/services/ToggleServices";
import WithoutVsWith from "@/components/services/WithoutVsWith";
import XeroCodeeWay from "@/components/services/XeroCodeeWay";
import Navbar from "@/components/shared/Navbar";
import Success from "@/components/success/Success";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <Hero />
      <Client />
      <Service1 />
      <ToggleServices />
      <WithoutVsWith />
      <SelfServices />
      <BlueContainerService />
      <BulletWiseServices />
      <Success />
      <NewsLetter />
    </main>
  )
}
