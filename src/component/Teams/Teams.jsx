import team1 from "../../assets/icons/team-icon-1.svg";
import team2 from "../../assets/icons/team-icon-2.svg";
import team3 from "../../assets/icons/team-icon-3.svg";
import Abarati from "../../assets/Images/team-1.png";
import Aahmadi from "../../assets/Images/team-2.png";
import Mmorady from "../../assets/Images/team-4.png";
import Mimani from "../../assets/Images/team-3.png";

function Section7() {
  const team = [
    {
      id: 1,
      title: "امیر براتی",
      position: "مدیرعامل موسسه کامل",
      src: Abarati,
    },
    { id: 2, title: "علی احمدی", position: "مدیریت موسسه کامل", src: Aahmadi },
    {
      id: 3,
      title: "مائده ایمانی",
      position: "مدیر فناوری اطلاعات ",
      src: Mimani,
    },
    { id: 4, title: "مریم مرادی", position: "مدیر منابع انسانی", src: Mmorady },
  ];
  return (
    <section className=" space-y-4 my-2">
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-[#175CFF] via-blue-800  to-[#FFC226] inline-block text-transparent bg-clip-text font-bold lg:text-3xl text-center my-3">
          تیم تجاری موسسه کامل{" "}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:container md:m-auto gap-2 p-2">
        {team.map((teams) => {
          return (
            <div
              key={teams.id}
              className="bg-white rounded-xl p-2 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer hover:translate-y-[-5px]"
            >
              <div className="w-[50%]">
                <img src={teams.src} className=" rounded-full" alt="" />
              </div>
              <div className="flex items-center flex-wrap gap-4">
                <h2 className="font-bold text-blue-600">{teams.title}</h2>
                <p className="text-[14px]">{teams.position}</p>
              </div>
              <div className="flex items-center justify-center gap-6">
                <a className="hoverIcon">
                  <img src={team1} alt="" />
                </a>
                <a className="hoverIcon">
                  <img src={team2} alt="" />
                </a>
                <a className="hoverIcon">
                  <img src={team3} alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Section7;
