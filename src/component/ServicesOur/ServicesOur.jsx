import khadamat from "../../assets/Images/khadamat-label.png";
import icon1 from "../../assets/icons/Digital-marketing.svg";
import icon2 from "../../assets/icons/wordpress.svg";
import icon3 from "../../assets/icons/UIUX.svg";
import icon4 from "../../assets/icons/code-website.svg";
import icon5 from "../../assets/icons/bazar.svg";
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
      <div className="max-w-2xl w-full m-auto">
        <img src={khadamat} className="w-full h-auto object-cover" alt="" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="bg-white rounded-xl p-2 flex flex-col items-center gap-6 transition-all hover:shadow-md hover:shadow-blue-600 hover:translate-y-[-5px] cursor-pointer"
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
      </div>
    </section>
  );
}

export default Section4;
