import poromIcon from "../../assets/icons/porom.png";
import digitalIcon from "../../assets/icons/digital.png";
import funnelIcon from "../../assets/icons/funnel.png";
import growbotsIcon from "../../assets/icons/growbots.png";
function Section2() {
  const icons = [
    { id: 1, src: poromIcon },
    { id: 2, src: digitalIcon },
    { id: 3, src: funnelIcon },
    { id: 4, src: growbotsIcon },
  ];
  return (
    <section className="flex flex-col items-center p-2 gap-4">
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-[#175CFF] via-blue-800  to-[#FFC226] inline-block text-transparent bg-clip-text font-bold text-3xl sm:text-5xl text-center my-3">
          همکاران ما
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl w-full bg-white p-2 rounded-xl">
        {icons.map((icon) => (
          <div key={icon.id}>
            <img src={icon.src} alt={"dfsdf"} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;
