import React from "react";

const sizeClasses = {
  txtRobotoRegular14GreenA700: "font-normal font-roboto",
  txtRobotoRegular14GreenA400: "font-normal font-roboto",
  txtRobotoRegular14Indigo300: "font-normal font-roboto",
  txtPoppinsLight16: "font-light font-poppins",
  txtRobotoRegular14Bluegray300: "font-normal font-roboto",
  txtPoppinsRegular34WhiteA700: "font-normal font-poppins",
  txtPoppinsLight16Black900: "font-light font-poppins",
  txtPoppinsLight60: "font-light font-poppins",
  txtRobotoBold10Bluegray600: "font-bold font-roboto",
  txtRobotoRegular14Indigo800: "font-normal font-roboto",
  txtOpenSansBold10: "font-bold font-opensans",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular12WhiteA70090: "font-normal font-roboto",
  txtPoppinsRegular34: "font-normal font-poppins",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular14Black900: "font-normal font-roboto",
  txtPoppinsLight16WhiteA700: "font-light font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtRobotoRegular12Indigo80090: "font-normal font-roboto",
  txtRobotoRegular14Indigo80090: "font-normal font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtArchivoVFBetaRegular2051: "font-archivo font-normal",
  txtRobotoBold10: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
