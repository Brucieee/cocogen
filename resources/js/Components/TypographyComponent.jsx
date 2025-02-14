import React from "react";

const Typography = ({ variant = "body", weight = "normal", children, className = "" }) => {
  const textStyles = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    body: "text-base",
    caption: "text-sm",
    tiny: "text-xs",
    footnote: "text-xs italic",
  };

  const weightStyles = {
    black: "font-black",
    bold: "font-bold",
    medium: "font-medium",
    normal: "font-normal",
    light: "font-light",
  };

  return <p className={`${textStyles[variant]} ${weightStyles[weight]} ${className}`}>{children}</p>;
};

export default Typography;
