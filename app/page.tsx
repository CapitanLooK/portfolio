import ProfilePhoto from "@/components/profilePhoto/ProfilePhoto"
import DownloadBtn from "@/components/social/DownloadBtn"
import Socials from "@/components/social/Socials"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hola! Soy <br /> <span className="text-accent">Alejandro Maure</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Soy desarrollador de software con mas de 3 años de experiencia. Me especializo en el desarrollo de aplicaciones web y móviles con diferentes tecnologías.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadBtn />
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home