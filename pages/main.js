import MainLayout from '../components/MainLayout';

const Homepage = () => {
  return (
    <MainLayout>
      <main className="w-full">
        <section
          id="home"
          className="flex flex-col items-center justify-center py-8 px-2 h-screen"
        >
          <span className="font-bold text-lg"># Home section</span>
        </section>
        <section
          id="features"
          className="flex flex-col items-center justify-center py-8 px-2 h-screen"
        >
          <span className="font-bold text-lg"># Features section</span>
        </section>
        <section
          id="pricing"
          className="flex flex-col items-center justify-center py-8 px-2 h-screen"
        >
          <span className="font-bold text-lg"># pricing section</span>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-center py-8 px-2 h-screen"
        >
          <span className="font-bold text-lg"># Contact section</span>
        </section>
      </main>
    </MainLayout>
  );
};

export default Homepage;
