import React from "react";

interface HeaderProps {
  heading: string;
  paragraph: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ heading, paragraph, className }) => {
  return (
    <div className={className}>
      <h2 className="text-greyscale2 text-lg md:text-2xl font-semibold mb-2">
        {heading}
      </h2>
      <p className="text-greyscale2 text-sm md:text-base">{paragraph}</p>
    </div>
  );
};

export default Header;
