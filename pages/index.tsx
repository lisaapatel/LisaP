import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/Layout/Layout';

interface LifeUpdateProps {
  title: string;
  content: string;
}

const LIFE_UPDATES: LifeUpdateProps[] = [
  { title: "Life goal", content: "Enjoy all of nature's beautiful experiences" },
  { title: "Learning", content: "Yoga" },
  { title: "Reading", content: "The Midnight library, Hacking Growth by Sean Ellis" },
  { title: "Listening", content: "Morning brew, All-in,No Stupid Questions" },
  { title: "Watching", content: "Sevrance" },
  { title: "Celebrating", content: "Highschool friends reunion & all the little joys in Life!" },
];

export default function Home() {
  return (
    <Layout>
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-24">
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Welcome to my corner on the internet.
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-normal">
                Nice to e-meet you!
              </p>
            </div>

            {/* About Section */}
            <div className="space-y-12">
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I am an SCU alumnus with a Master's in Information Systems, currently based out of the Bay Area. 
                  I am passionate about using data to help and build better products for users. Currently working at{" "}
                  <a 
                    href="https://upgrade.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-foreground/80 transition-colors"
                  >
                    Upgrade
                  </a>
                  , I help different teams in making impactful data-driven decisions.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  My passion revolves around three core tenets: strategy, analytics, and innovation. 
                  I am an avid learner who enjoys exciting challenges. I presume it is to accept what 
                  life throws at me and mould it in the best possible way while enjoying small wins on the way.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  You can also catch me binge-watching on Netflix, daydreaming, baking, trying out new recipes 
                  or blogging about my travels and experiences.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Besides this, I am also interested in smart mobility, and sustainability!
                </p>
              </div>

              <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-secondary">
                <Image
                  src="/lisa_patel.jpeg"
                  alt="Lisa Patel"
                  width={900}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Life Updates Section */}
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                A peek into my life right now
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {LIFE_UPDATES.map(({ title, content }) => (
                  <div key={title} className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="text-xl text-muted-foreground">
                      {content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <p className="text-2xl text-muted-foreground">
              Thanks for stopping by!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
