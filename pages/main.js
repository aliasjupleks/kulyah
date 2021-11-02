import MainLayout from '../components/MainLayout';
import Card from '../components/Card';
import { BeakerIcon } from '@heroicons/react/solid';

const Homepage = () => {
  const cardPricingItem = [
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
  const cardCompItem = [
    {
      icon: '',
      title: 'page builder',
      caption: 'Build your page easily',
    },
    {
      icon: '',
      title: 'customized domain',
      caption: 'Create your beautiful domain',
    },
    {
      icon: '',
      title: 'simple main board',
      caption: 'Make your own page with very simple main board',
    },
    {
      icon: '',
      title: 'handle your transaction payment',
      caption: 'You can handle and customize your own transaction easily',
    },
    {
      icon: '',
      title: 'easy publish page',
      caption: 'Easy to publish',
    },
    {
      icon: '',
      title: 'share and collaborate',
      caption: 'Share it and collaborate with your friends',
    },
  ];

  return (
    <MainLayout>
      <main className="w-screen">
        <section
          id="home"
          className="flex flex-col items-center justify-center py-8 h-screen"
        >
          {/* <span className="font-bold text-lg"># Home section</span> */}
          <div className="flex flex-wrap justify-center mt-28">
            <div className="w-64 flex flex-col gap-6">
              <span className="text-5xl font-bold">Showoff</span>
              <p className="text-lg">
                Showoff is web builder that can help people to build their own
                page for their product and do a payment with it
              </p>
            </div>
            <div>
              <img src="/dashboard.png" className="w-full h-full lg:h-96" />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="flex flex-col items-center justify-center my-8 h-screen"
        >
          <div className="py-10 bg-gray-300">
            <div className="flex flex-col gap-5 items-center">
              <div>
                <span className="font-semibold text-4xl">Features</span>
                <hr className="border-blue-500 border-2 w-full mt-3 mb-3" />
              </div>
              <div className="flex flex-wrap gap-8 justify-center">
                {cardCompItem.map((item) => (
                  <Card className="w-96 bg-white rounded-lg">
                    <div className="flex flex-col items-center justify-center h-48 gap-3">
                      <BeakerIcon className="h-14 w-14 text-blue-500" />
                      <span className="text-xl font-semibold capitalize">
                        {item.title}
                      </span>
                      <p>{item.caption}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="my-8 h-full">
          <div className="py-16 flex flex-col items-center">
            <div className="mb-8">
              <span className="font-semibold text-4xl">Pricing</span>
              <hr className="border-blue-500 border-2 w-full mt-3 mb-3" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {cardPricingItem.map((item) => (
                <Card className="w-96 bg-white rounded-lg">
                  <div className="h-72 flex flex-col items-center justify-start gap-4">
                    <span className="text-4xl font-bold">{item.access}</span>
                    <hr className="border-gray-400 border-1 w-full mt-3 mb-3" />
                    <span className="text-4xl font-bold">{item.price}</span>
                    <p className="text-lg">{item.caption}</p>
                    <div className="justify-center card-actions">
                      <button className="btn btn-outline btn-primary">
                        {item.btn}
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-center py-8 h-full mb-8"
        >
          <div className="flex flex-col w-96 mx-10 gap-4">
            <span className="text-4xl font-semibold font-mono">
              Get in Touch
            </span>
            <div class="form-control">
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                placeholder="Your Email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <textarea
                class="textarea h-24 textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="w-56">
              <button class="btn btn-primary">Send Message</button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Homepage;
