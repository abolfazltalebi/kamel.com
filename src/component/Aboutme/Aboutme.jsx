import about from "../../assets/Images/about-label.png";
import aboutSection from "../../assets/Images/about.png";
import Button from "../Button/Button";
function Section3() {
  return (
    <section className=" space-y-2 my-4">
      <div className="max-w-2xl w-full m-auto">
        <img src={about} className="w-full h-auto object-cover" alt="" />
      </div>
      <div className="container bg-white p-2 flex flex-col md:flex-row gap-4 space-y-2">
        <div>
          <img
            src={aboutSection}
            className="w-full h-auto object-cover"
            alt=""
          />
        </div>
        <div className="md:flex flex-col items-start justify-center gap-6">
          <p>ارائه راه حل های مفید و کاربردی</p>
          <h2 className="text-3xl font-bold">
            با ما کسب وکار خود را با
            <span className="text-blue-600">تکنولوژی روز</span> به اوج خود
            برسانید
          </h2>
          <p className="text-gray-500">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <Button title="بیشتر بدانید" />
        </div>
      </div>
    </section>
  );
}

export default Section3;
