import section1 from "../../assets/Images/section1.png";
import Button from "../Button/Button";

function Section1() {
  return (
    <section className="container flex flex-col-reverse md:flex-row items-center gap-3 mt-5 md:mt-20 p-4 md:p-8">
      <div className="flex flex-col items-start gap-2 md:gap-4">
        <p>با ما بدرخشید</p>
        <h1 className="md:text-4xl text-2xl font-bold ">
          <span className="text-blue-600">بهترین</span> راه حل برای رشد کسب و
          کار استفاده از <span className="text-blue-600">تجربیات</span> دیگران
          است.
        </h1>
        <p className="text-gray-600 text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <Button title="تماس با ما" />
      </div>
      <div>
        <img src={section1} className="w-full h-auto object-cover" alt="" />
      </div>
    </section>
  );
}

export default Section1;
