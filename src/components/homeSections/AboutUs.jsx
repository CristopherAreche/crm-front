import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import cristopher from "../../assets/profilePictures/me.jpeg";
import joseph from "../../assets/profilePictures/x.jpeg";
import ricardo from "../../assets/profilePictures/ricardo.jpg";
import gaspar from "../../assets/profilePictures/gaspar.jpeg";
import maca from "../../assets/profilePictures/macarena.jpeg";

const AboutUsSection = () => {
  return (
    <section
      name="creadores"
      className="h-[100vh] pt-28  flex-col lg:flex-row justify-center flex"
    >
      <div className=" text-white h-[90%] lg:w-[70%] flex flex-col justify-evenly lg:items-center">
        <h1 className="text-[2.5em] font-bold mb-4">CREADORES</h1>
        <div>
          <div className="flex gap-5 flex-wrap justify-center">
            {/* Cristopher */}
            <div className=" w-[14em] bg-base-light shadow-xl rounded-lg py-3 px-4">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={cristopher}
                  alt="Cristopher Areche"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">
                  Cristopher Areche
                </h3>
                <div className="text-center text-light text-xs font-semibold">
                  <p className="py-2">Front-End</p>
                  <div className="flex justify-evenly pt-4 text-[2.5em]">
                    <Link
                      target="_blanck"
                      to="https://github.com/CristopherAreche"
                    >
                      <BsGithub />
                    </Link>
                    <Link
                      target="_blanck"
                      to="https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/"
                    >
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>

                <div className="text-center my-3"></div>
              </div>
            </div>

            {/* Macarena */}
            <div className="bg-base-light shadow-xl rounded-lg py-3 px-4 w-[14em]">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={maca}
                  alt="Macarena"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">
                  Macarena Rucci
                </h3>
                <div className="text-center text-light text-xs font-semibold">
                  <p className="py-2">Front-End</p>
                  <div className="flex justify-evenly pt-4 text-[2.5em]">
                    <Link target="_blanck" to="https://github.com/Macarr">
                      <BsGithub />
                    </Link>
                    <Link
                      target="_blanck"
                      to="https://www.linkedin.com/in/macarena-rodr%C3%ADguez-rucci-958294191/"
                    >
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>

                <div className="text-center my-3"></div>
              </div>
            </div>

            {/* Ricardo */}
            <div className="bg-base-light shadow-xl rounded-lg py-3 px-4 w-[14em]">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={ricardo}
                  alt="John Doe"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">
                  Ricardo Gonzales
                </h3>
                <div className="text-center text-light text-xs font-semibold">
                  <p className="py-2">Back-End</p>
                  <div className="flex justify-evenly pt-4 text-[2.5em]">
                    <Link target="_blanck" to="https://github.com/RicardoGT0">
                      <BsGithub />
                    </Link>
                    <Link
                      target="_blanck"
                      to="https://www.linkedin.com/in/ricardo-gonz%C3%A1lez-tello-7643bb1a9/"
                    >
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>

                <div className="text-center my-3"></div>
              </div>
            </div>

            {/* Joseph */}
            <div className="bg-base-light shadow-xl rounded-lg py-3 px-4 w-[14em]">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={joseph}
                  alt="John Doe"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">
                  Joseph Herrera
                </h3>
                <div className="text-center text-light text-xs font-semibold">
                  <p className="py-2">Back-End</p>
                  <div className="flex justify-evenly pt-4 text-[2.5em]">
                    <Link target="_blanck" to="https://github.com/jahm1997">
                      <BsGithub />
                    </Link>
                    <Link
                      target="_blanck"
                      to="https://www.linkedin.com/in/joseph-angel-herrera-mantilla/"
                    >
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>

                <div className="text-center my-3"></div>
              </div>
            </div>

            {/* Matias C */}
            <div className="bg-base-light shadow-xl rounded-lg py-3 px-4 w-[14em]">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"
                  alt="John Doe"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">
                  Matias Cabrera
                </h3>
                <div className="text-center text-light text-xs font-semibold">
                  <p className="py-2">Front-End</p>
                  <div className="flex justify-evenly pt-4 text-[2.5em]">
                    <Link target="_blanck" to="https://github.com/matias-d">
                      <BsGithub />
                    </Link>
                    <Link target="_blanck" to="">
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>

                <div className="text-center my-3"></div>
              </div>
            </div>

            {/* Matias V */}
            <div className="bg-base-light shadow-xl rounded-lg py-3 px-4 w-[14em]">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"
                  alt="John Doe"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">
                  Matias Vazquez
                </h3>
                <div className="text-center text-light text-xs font-semibold">
                  <p className="py-2">Back-End</p>
                  <div className="flex justify-evenly pt-4 text-[2.5em]">
                    <Link target="_blanck" to="https://github.com/MatVaz14">
                      <BsGithub />
                    </Link>
                    <Link
                      target="_blanck"
                      to="https://www.linkedin.com/in/matias-exequiel-vazquez-jaque-b42595254/
"
                    >
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>

                <div className="text-center my-3"></div>
              </div>
            </div>

            {/* Gaspar */}
            <div className="bg-base-light shadow-xl rounded-lg py-3 px-4 w-[14em]">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={gaspar}
                  alt="gaspar"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">
                  Gaspar Serna
                </h3>
                <div className="text-center text-light text-xs font-semibold">
                  <p className="py-2">Front-End</p>
                  <div className="flex justify-evenly pt-4 text-[2.5em]">
                    <Link target="_blanck" to="https://github.com/gxspxr">
                      <BsGithub />
                    </Link>
                    <Link
                      target="_blanck"
                      to="https://www.linkedin.com/in/gaspar-serna-8a0945215"
                    >
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Jhoan */}
            <div className="bg-base-light shadow-xl rounded-lg py-3 px-4 w-[14em]">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"
                  alt="John Doe"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">
                  Jhoan Jianpierre
                </h3>
                <div className="text-center text-light text-xs font-semibold">
                  <p className="py-2">Back-End</p>
                  <div className="flex justify-evenly pt-4 text-[2.5em]">
                    <Link target="_blanck" to="https://github.com/HanJian16">
                      <BsGithub />
                    </Link>
                    <Link
                      target="_blanck"
                      to="https://www.linkedin.com/in/jhohan-jianpierre/"
                    >
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>

                <div className="text-center my-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
