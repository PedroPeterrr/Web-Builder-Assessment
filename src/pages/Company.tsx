import { CompanyIcons } from "../constant/data";

export default function Icon() {
  return (
    <section
      className="
        grid grid-cols-2 place-items-center gap-6 p-5
        md:flex md:flex-row md:justify-evenly
      "
    >
      {CompanyIcons.map(({ logo, alt }, index) => (
        <img key={index} src={logo} alt={alt} className="company-icons" />
      ))}
    </section>
  );
}
