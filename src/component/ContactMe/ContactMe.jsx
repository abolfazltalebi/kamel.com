import contact from "../../assets/Images/contact.png";
import phone from "../../assets/icons/Phone.svg";
import whatsapp from "../../assets/icons/WhatsappLogo.svg";
import email from "../../assets/icons/email.svg";
export default function Section6() {
  return (
    <section className="my-4 bg-white p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-4">
      <div className="md:max-w-md  w-full">
        <img src={contact} alt="" />
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-2xl">تماس با ما</h2>
        <p>با خیال راحت تماس بگیرید، باعث خوشحالی شما خواهد شد</p>
        <p>
          برای اینکه بتوانم در رشد کسب و کار خود به شما کمک کنم، اکنون با من
          تماس بگیرید!
        </p>
        <div>
          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-1">
              09123400000
              <img src={phone} alt="" />
            </li>
            <li className="flex items-center gap-1">
              09123400000
              <img src={whatsapp} alt="" />
            </li>
            <li className="flex items-center gap-1">
              Kamel@gmail.com
              <img src={email} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
