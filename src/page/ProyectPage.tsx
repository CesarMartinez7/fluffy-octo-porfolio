import MockDataProyect from "../Mocks/proyect.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "../components/SpothCard";
import { Safari } from "../components/Mockup";




export default function ProyectPage() {
  const { id } = useParams();
  const numericId = id ? parseInt(id) : 0;
  const Data = MockDataProyect.filter((item) => item.id === numericId);
  const [data] = useState(Data[0]);

  useEffect(() => {
    document.title = data.name;
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-2 md:p-12 lg:p-22 w-full flex flex-col items-center justify-center h-full "
    >
      <div className="w-full lg:w-[50vw] flex flex-col gap-2.5 my-17 p-3.5">
        <h4 className="text-4xl  font-bold ">
          {data.name}
        </h4>
        <p className="text-xs">{data.slogan}</p>
        <div className="gap-2.5 flex w-full ">
          <button className="p-[3px] relative cursor-pointer w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-500 to-zinc-900 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px] text-sm  relative group transition  text-white hover:bg-transparent duration-200 font-semibold">
              See any my projects
            </div>
          </button>
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Sketch
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="row-span-3 rounded-md">
            <p className="font-semibold my-1.5">Descripción</p>
            <p className="text-sm ">{data.moreDescription}</p>
          </div>
          <div>
            <p className="font-semibold mb-2.5">Tecnologías usadas</p>
            <ul className="grid grid-cols-5 md:grid-cols-9 lg:grid-cols-10 gap-2.5">
              {data.tecnologias.map((item, index) => (
                <SpotlightCard
                  key={index}
                  className="custom-spotlight-card flex justify-center w-full"
                  //@ts-ignore
                  spotlightColor="gray"
                >
                  <Icon
                    icon={`logos:${item.toLowerCase()}`}
                    width="50"
                    height="40"
                  />
                </SpotlightCard>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="my-3 font-semibold">Capturas de pantalla</h3>
          <div className="w-full">
            <Safari
              imageSrc={data.imageResponsive[2]}
              className="size-full"
              url={data.link}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
