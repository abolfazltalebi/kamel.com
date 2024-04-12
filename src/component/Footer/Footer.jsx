import aboutFooter from "../../assets/Images/about-footer.png";
import fast from "../../assets/Images/fast-label.png";
import khadamat from "../../assets/Images/khadamat-footer.png";
import contact from "../../assets/Images/contact-footer.png";
import lineContact from "../../assets/Images/line-footer.png";
import team1 from "../../assets/icons/team-icon-1.svg";
import team2 from "../../assets/icons/team-icon-2.svg";
import team3 from "../../assets/icons/team-icon-3.svg";
function Footer() {
  return (
    <footer className=" bg-white rounded-t-3xl shadow-lg p-4 space-y-4 mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="item-footer-1 space-y-4">
          <div className="max-w-2xl w-full">
            <img src={aboutFooter} alt="" />
          </div>
          <div>
            <p className="text-[14px] text-gray-500 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است
            </p>
            <div className="flex items-center gap-6">
              <a href="">
                <img src={team1} alt="" />
              </a>
              <a href="">
                <img src={team2} alt="" />
              </a>
              <a href="">
                <img src={team3} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="item-footer-2 space-y-4">
          <div >
            <img src={fast} alt="" />
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  خدمات ما
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  تماس با ما
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  وبلاگ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-footer-3 space-y-4">
          <div>
            <img src={khadamat} alt="" />
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  طراحی سایت وردپرس
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  طراحی سایت کدنویسی
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  طراحی UI/UX
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                >
                  آنالیز کسب و کار
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-footer-4 space-y-4">
          <div>
            <img src={contact} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <p>تلفن ثابت: 0214698000</p>
            <p>آدرس :تهران خیابان انقلاب موسسه تجاری کامل</p>
            <p>ایمیل ما :suport@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 max-w-2xl w-full m-auto">
        <div>
            <img src={lineContact} alt="" />
        </div>
        <div>
            <p className="text-gray-500 text-[14px]">تمامی حقوق مادی و معنوی این قالب متعلق به موسسه تجاری کامل است.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
