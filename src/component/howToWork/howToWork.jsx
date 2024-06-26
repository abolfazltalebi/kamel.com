import icon1 from "../../assets/icons/process_card_1.svg";
import icon2 from "../../assets/icons/process_card_2.svg";
import icon3 from "../../assets/icons/process_card_3.svg";
import icon4 from "../../assets/icons/process_card_4.svg";

function Section5() {
  const steps = [
    { id: 1, title: "مشاوره و شروع پروژه", src: icon1 },
    { id: 2, title: "تحلیل پروژه", src: icon2 },
    { id: 3, title: "اجرای طرح", src: icon3 },
    { id: 4, title: "ارائه نتیجه پروژه", src: icon4 },
  ];

  return (
    <section className="space-y-3  md:container md:m-auto my-4">
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-[#175CFF] via-blue-800  to-[#FFC226] inline-block text-transparent bg-clip-text font-bold lg:text-3xl sm:text-5xl text-center my-3">
          نحوه کار موسسه تجاری کامل
        </h2>
      </div>
      <div className="grid md:grid-cols-4 p-4 gap-4">
        {steps.map((step) => {
          return (
            <div
              key={step.id}
              className="bg-white rounded-xl p-2 flex flex-col items-center gap-2 hoverBox"
            >
              <div>
                <img src={step.src} alt={step.title} title={step.title} />
              </div>
              <div className="space-y-2">
                <h2 className="text-center font-bold">{step.title}</h2>
                <p className="text-center text-gray-500 text-[14px]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Section5;
