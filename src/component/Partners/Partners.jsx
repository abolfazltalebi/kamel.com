import hamkaranImg from "../../assets/Images/hamkaran-label.png"; // Assuming PNG format
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
      <div className="max-w-2xl w-full">
        <img
          src={hamkaranImg}
          className="w-full h-auto object-cover"
          alt="Hamkaran"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl w-full bg-white p-2 rounded-xl">
        {icons.map((icon) => (
          <div key={icon.id}>
            <img src={icon.src} alt={'dfsdf'} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;
