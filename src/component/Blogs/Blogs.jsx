import blogLabel from "../../assets/Images/blog-label.png";
import blog1 from "../../assets/Images/post-1-4.png";
import blog2 from "../../assets/Images/post-2-4.png";
import blog3 from "../../assets/Images/post-3-4.png";
import blog4 from "../../assets/Images/post-4-4.png";
import Button from "../Button/Button";
import shear from "../../assets/icons/shear.svg";
function Section8() {
  const blog = [
    {
      id: 1,
      title: "7 راه حل موفقیت یک کسب و کار",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      src: blog1,
    },
    {
      id: 2,
      title: "کدنویسی یا ورپرس کدام؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      src: blog2,
    },
    {
      id: 3,
      title: "مزابا و معایب طراحی سایت وردپرس؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      src: blog3,
    },
    {
      id: 4,
      title: "5 راه حل مناسب برای تبلیغات ؟",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      src: blog4,
    },
  ];
  return (
    <section className=" p-2 space-y-2">
      <div className="max-w-2xl w-full m-auto">
        <img
          src={blogLabel}
          className="max-w-full h-auto object-cover"
          alt={"blogCamel.com"}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:container md:m-auto gap-6">
        {blog.map((blogs) => {
          return (
            <div key={blogs.id} className="bg-white rounded-xl hoverBox">
              <div>
                <img src={blogs.src} alt="" />
              </div>
              <div className="p-2">
                <h2 className="font-bold">{blogs.title}</h2>
                <p className="text-[14px] text-justify">{blogs.caption}</p>
                <div className="w-[95%] h-[2px] bg-gray-300 m-auto my-3"></div>
                <div className="flex items-center justify-between">
                  <Button title="ادامه مطلب" />
                  <a className="bg-blue-600 rounded-full w-[40px] h-[40px] flex items-center justify-center hover:animate-bounce cursor-pointer">
                    <img src={shear} alt="" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Section8;