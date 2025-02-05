import type { NextPage } from "next";
import { Section, TextBlock } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Section type="light">
        <div className="container">
          <TextBlock header="Hi 👋, I'm Lisa" />
        </div>
      </Section>
      <div className="container mt-4">
        <Section
          type="dark"
          className="sm:grid sm:grid-cols-3 sm:gap-14 sm:min-h-[500px] items-center"
        >
          <div
            style={{
              backgroundImage: `url('/lisa_patel.jpeg')`,
            }}
            className="bg-no-repeat bg-contain h-full min-h-[300px] mb-6 sm:mb-0 sm:min-h-full"
          />
          <div className="col-span-2">
            <h2 className="mb-5 text-2xl font-bold">
              Welcome to my corner on the internet.
            </h2>
            <h4 className="text-lg font-bold">Nice to e-meet you!</h4>
            <p className="my-4">
              I am an SCU alumnus with a Master&apos;s in Information Systems,
              currently based out of the Bay Area. I am passionate about using
              the data to help and build better products for the users.
              Currently working at a fintech unicorn start-up{" "}
              <a href="https://www.upgrade.com">
                <u>
                  <i>Upgrade</i>
                </u>
              </a>
              , I help different teams in making impactful data-driven
              decisions. My passion revolves around three core tenets: strategy,
              analytics, and innovation. I am an avid learner who enjoys
              exciting challenges. I presume it is to accept what life throws at
              me and mould it in the best possible way while enjoying small wins
              on the way.
            </p>
            <p className="my-4">
              You can also catch me binge-watching on Netflix, daydreaming,
              baking, trying out new recipes or blogging about my travels and
              experiences. You can find my blog{" "}
              <a href="https://www.instagram.com/thehattales/">
                <u>
                  <i>here</i>
                </u>
              </a>
              .
            </p>
            <p className="my-4">
              Besides this, I am also interested in smart mobility, and
              sustainability!
            </p>
          </div>
        </Section>
      </div>

      <Section type="dark">
        <div className="container sm:grid sm:grid-cols-3 sm:gap-14">
          <div className="sm:col-span-2 sm:col-start-2">
            <h4 className="text-lg font-bold mb-4">
              A peek into my life right now
            </h4>
            <ul>
              <li>
                <span className="font-bold">Life goal:</span> Enjoy all of
                nature&apos;s beautiful experiences
              </li>
              <li>
                <span className="font-bold">Learning:</span> Yoga
              </li>
              <li>
                <span className="font-bold">Reading:</span> The Midnight
                library, Hacking Growth by Sean Ellis
              </li>
              <li>
                <span className="font-bold">Listening:</span> No Stupid
                Questions, Below the Line by James Beshera James Beshera
              </li>
              <li>
                <span className="font-bold">Watching:</span> The watcher, house
                of dragons
              </li>
              <li>
                <span className="font-bold">Celebrating:</span> Highschool
                friends reunion & all the little joys in Life!
              </li>
            </ul>
            <p>Thanks for stopping by!</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
