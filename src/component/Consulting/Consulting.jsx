import backContact from "../../assets/Images/background-contact.png";
import contactVector from "../../assets/Images/contact-vector.png";
import Button from "../Button/Button";
function Section9() {
  return (
    <section className="relative hidden md:inline">
      <div>
        <img
          src={backContact}
          className="max-w-full h-auto object-cover"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center right-0 left-0  gap-2 absolute top-3 ">
        <div>
          <img src={contactVector} className="max-w-md" alt="" />
        </div>
        <div className="p-2 space-y-4">
          <p className="text-white text-[14px]">مشاوره</p>
          <p className="max-w-3xl text-white font-bold text-justify">
            مشاوره کسب و کار شما توسط موسسه تجاری کامل باعث رشد و پیشرفت شما می
            شود....
          </p>
          <Button title="تماس با ما" />
        </div>
      </div>
    </section>
  );
}

export default Section9;
