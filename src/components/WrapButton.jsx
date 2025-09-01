import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";

const WrapButton = ({ className, children, href }) => {
  return (
    <div className="flex items-center justify-center text-white">
      {href ? (
        <Link to={href}>
          <div
            className={
              "group cursor-pointer border group text-white border-[#45057a] bg-[#45057a] gap-2  h-[64px] flex items-center p-[11px] rounded-full"
            }
          >
            <div className="border  border-[#3B3A3A] bg-[#fe00fe]  h-[43px] rounded-full flex items-center justify-center text-white">
              <p className="font-medium text-white tracking-tight mr-3 ml-2 flex items-center gap-2 justify-center ">
                {children}
              </p>
            </div>
            <div className=" text-white group-hover:ml-2  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#fff]  ">
              <ArrowRight
                size={18}
                className="group-hover:rotate-45 bg-[#45057a] text-white ease-in-out transition-all "
              />
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={
            "group cursor-pointer border group text-white border-[#3B3A3A]  bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full"
          }
        >
          <div className="border border-[#3B3A3A] bg-[#fe00fe]  h-[43px] rounded-full flex items-center justify-center text-white">
            <Globe className="mx-2 animate-spin " />
            <p className="font-medium tracking-tight mr-3 text-white">
              {children ? children : "Get Started"}
            </p>
          </div>
          <div className="text-[#3b3a3a] group-hover:ml-2  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]  ">
            <ArrowRight
              size={18}
              className="group-hover:rotate-45 ease-in-out transition-all "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { WrapButton };
