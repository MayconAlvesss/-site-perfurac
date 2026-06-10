import Navigation from './features/navigation/Navigation';
import Hero from './features/hero/Hero';
import Manifesto from './features/manifesto/Manifesto';
import ServicesSection from './features/services/ServicesSection';
import EquipmentTable from './features/services/EquipmentTable';
import HorizontalGallery from './features/portfolio/HorizontalGallery';
import ImmersiveMachineShowcase from './features/showcase/ImmersiveMachineShowcase';
import Associations from './features/associations/Associations';
import Footer from './features/footer/Footer';

const App = () => {
  return (
    <div className="font-sans bg-creme text-carbono selection:bg-vermelhoP selection:text-white relative">
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <ServicesSection />
        <EquipmentTable />
        <HorizontalGallery />
        <ImmersiveMachineShowcase />
        <Associations />
      </main>
      <Footer />
    </div>
  );
};

export default App;
