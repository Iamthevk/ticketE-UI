import Image from "next/image";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex md:flex-col md:px-5 md:py-4 rounded-xl md:border md:border-solid md:border-greyscale6 w-full md:w-[282px] gap-4 md:gap-0">
      <Image src={icon} alt="feature-icon" width={48} height={48} />
      <div>
        <h3 className="md:mt-10 font-semibold mb-1 text-greyscale2">{title}</h3>
        <p className="text-sm md:text-base text-greyscale3 ">{description}</p>
      </div>
    </div>
  );
};
export default Feature;
