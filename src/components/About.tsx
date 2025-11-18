import { FaJava, FaReact } from "react-icons/fa"
import { TbBrandJavascript, TbBrandTypescript, TbBrandVite } from "react-icons/tb"


const About = () => {
  return (
    <section id='about' className='min-h-screen flex flex-col items-center justify-center text-white'>
          <div className="text-[#C5C5C5] font-semibold">
            <h2>EXPERIENCE WITH</h2>
          </div>

          <div className="flex mt-5 gap-4 text-3xl text-[#C5C5C5]">
            <FaReact />
            <TbBrandTypescript />
            <TbBrandVite />
          </div>
    </section>
  )
}

export default About
