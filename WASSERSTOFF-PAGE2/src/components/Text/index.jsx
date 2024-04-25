import React from "react";

const sizeClasses = {
  txtPoppinsLight24: "font-light font-poppins",
  txtRobotoRegular161WhiteA700: "font-normal font-roboto",
  txtPoppinsSemiBold184WhiteA700: "font-poppins font-semibold",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsLight16Indigo800: "font-light font-poppins",
  txtPoppinsMedium72: "font-medium font-poppins",
  txtPoppinsLight16Black900: "font-light font-poppins",
  txtRobotoBold10Bluegray600: "font-bold font-roboto",
  txtPoppinsLight16Indigo80090: "font-light font-poppins",
  txtRobotoRegular14: "font-normal font-roboto",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsSemiBold184: "font-poppins font-semibold",
  txtRobotoRegular161: "font-normal font-roboto",
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
