import React from "react";

import { Button, Img, Text } from "components";

const WorldHexagonMapInformerinfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-deep_purple-A200 flex h-[70px] items-center justify-center p-[18px] rounded-[20px] w-[70px]">
          <Img className="h-8" src="images/img_activity.svg" alt="activity" />
        </Button>
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-indigo-800 text-xl tracking-[0.44px] w-auto"
            size="txtRobotoRegular20"
          >
            {props?.totalearningtitle}
          </Text>
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
              size="txtPoppinsSemiBold20"
            >
              {props?.totalearningvalue}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WorldHexagonMapInformerinfo.defaultProps = {
  totalearningtitle: "Total earning",
  totalearningvalue: "540,549",
};

export default WorldHexagonMapInformerinfo;
