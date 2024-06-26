import Photo from "@/components/Photo"
import Social from "@/components/Social"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col items-center justify-center text-center xl:flex-row xl:items-center xl:justify-between xl:pt-8 xl:pb-24 xl:text-left">
          {/* text */}
          <div>

            <h1 className="h1">
              Hello, my name is <br /> <span className="text-accent">Jay Tat</span>
            </h1>
             {/* Empty Line*/}
             <div className="my-4"></div>
            <p>I'm currently a upcoming Senior studying Computer Science at the University of California, Davis</p>
            {/* Empty Line*/}
            <div className="my-4"></div>
            {/*socials*/}
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6 justify-center xl:justify-start" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
            </div>
          </div>
          {/*photo*/}
          <Photo/>
        </div>
      </div>
    </section>
  )
}


export default Home