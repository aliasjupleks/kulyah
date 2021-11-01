import MainLayout from '../components/MainLayout';
import Card from '../components/Card';

const Homepage = () => {
  const cardItem = [
    {
      access: 'Free',
      price: '$0',
      caption: 'Always free for 1 user',
      btn: 'Get started',
    },
    {
      access: 'Standard',
      price: '$7.50',
      caption: 'per user (avarage) $75 a month',
      btn: 'Start trial',
    },
    {
      access: 'Premium',
      price: '$14.50',
      caption: 'per user (average) $145 a month',
      btn: 'Start trial',
    },
  ];

  return (
    <MainLayout>
      <main className="w-full mx-4">
        <section
          id="home"
          className="flex flex-col items-center justify-center py-8 px-2 h-screen"
        >
          {/* <span className="font-bold text-lg"># Home section</span> */}
          <div className="flex flex-wrap justify-center">
            <div className="w-64 flex flex-col gap-6">
              <span className="text-5xl font-bold">Showoff</span>
              <p className="text-lg">
                Showoff is web builder that can help people to build their own
                page for their product and do a payment with it
              </p>
            </div>
            <div>
              <img src="/dashboard.png" className="w-full h-auto lg:h-96" />
            </div>
          </div>
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
          {/* <span className="font-bold text-lg"># pricing section</span> */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {cardItem.map((item) => (
              <Card className="w-60">
                <div className="h-56">
                  <span className="text-2xl font-bold">{item.access}</span>
                  <hr className="border-gray-400 border-1 w-full mt-3 mb-3" />
                  <span className="text-lg font-bold">{item.price}</span>
                  <p>{item.caption}</p>
                  <div className="justify-center card-actions">
                    <button className="btn btn-outline btn-primary">
                      {item.btn}
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-center py-8 mx-4 h-screen"
        >
          {/* <span className="font-bold text-lg"># Contact section</span> */}
          <div className="flex flex-wrap gap-8 justify-center">
            {[...Array(6)].map((i) => (
              <Card className="w-80" key={i}>
                <div className="flex flex-col h-40">
                  <span className="text-2xl font-bold mb-3">icon</span>
                  <span className="text-xl font-semibold">a title</span>
                  <p>a caption</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Homepage;
