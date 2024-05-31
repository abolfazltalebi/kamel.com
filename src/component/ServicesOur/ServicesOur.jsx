import { motion } from "framer-motion";

import icon1 from "../../assets/icons/Digital-marketing.svg";
import icon4 from "../../assets/icons/code-website.svg";
import icon2 from "../../assets/icons/wordpress.svg";
import icon5 from "../../assets/icons/bazar.svg";
import icon3 from "../../assets/icons/UIUX.svg";
import icon6 from "../../assets/icons/seo.svg";
import Button from "../Button/Button";

function Section4() {
  const services = [
    { id: 1, title: "دیجیتال مارکتینگ", src: icon1 },
    { id: 2, title: "طراحی سایت وردپرس", src: icon2 },
    { id: 3, title: "طراحی Ui & Ux", src: icon3 },
    { id: 4, title: "طراحی سایت کدنویسی", src: icon4 },
    { id: 5, title: "بازار یابی کسب و کار", src: icon5 },
    { id: 6, title: "سئو و تولید محتوا", src: icon6 },
  ];

  return (
    <section className="p-3 md:container md:m-auto space-y-3 my-4">
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-[#175CFF] via-blue-800  to-[#FFC226] inline-block text-transparent bg-clip-text font-bold lg:text-3xl text-center my-3">
          خدمات موسسه تجاری کامل
        </h2>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.5 } },
        }}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-3 gap-6 p-1"
      >
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="bg-white rounded-xl p-3 flex flex-col items-center gap-6 hoverBox cursor-pointer"
            >
              <div>
                <img
                  src={service.src}
                  alt={service.title}
                  title={service.title}
                />
              </div>
              <div className="space-y-2">
                <h2 className="font-bold text-center">{service.title}</h2>
                <p className="text-[14px] text-justify">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
                <Button title="سفارش دهید" />
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Section4;
