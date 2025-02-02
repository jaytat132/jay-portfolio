import NameAnimation from "@/components/NameAnimation";
import Photo from "@/components/Photo";
import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col items-center justify-center text-center xl:flex-row xl:items-center xl:justify-between xl:pt-8 xl:pb-24 xl:text-left">
          {/* text */}
          <div>
            <h1 className="h1 leading-tight">
              Hello, my<br />
              name is
            </h1>
            <NameAnimation />
            <p className="mt-4">I'm currently Senior studying Computer Science <br />at the University of California, Davis.</p>
            {/* socials */}
            <div className="mt-4 mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6 justify-center xl:justify-start"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
          {/* photo */}
          <div className="ml-4 xl:ml-8">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
