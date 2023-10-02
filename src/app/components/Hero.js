import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  const elementsArray = new Array(169).fill(null);

  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <h3>Show Them Don’t Just Tell</h3>
        <p>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="hero_btn">
          Install HelpMeOut
          <Image src="./arrow-right.svg" width={20} height={20} alt="arrow" />
        </button>
      </div>

      <div>
        <div className="grid grid-cols-2 grid-rows-2 gap-[14px]">
          <Image
            src="/AdobeStock_400053098 1.png"
            width={311}
            height={214}
            className="rounded-lg"
          />
          <div className=" row-span-2 flex w-[305px] h-[448px] flex-col justify-center rounded-lg">
            <div className="z-50 relative">
              <Image
                src="/woman-using-smartphone-technology 2.png"
                width={305}
                height={448}
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-center flex-wrap max-w-[330px] max-h-[313px] gap-[16px] opacity-40 absolute left-[72%] top-[140px] z-10">
              {elementsArray.map((_, index) => (
                <Image
                  src={"/purple_dot.svg"}
                  width={10}
                  height={10}
                  key={index}
                  className="z-0"
                  alt="people"
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="z-50 relative">
              <Image
                src="/AdobeStock_362497671 1.png"
                width={311}
                height={214}
                className=" rounded-lg z-50"
                alt="people"
              />
            </div>
            <div className="flex justify-center flex-wrap max-w-[330px] max-h-[313px] gap-[16px] opacity-50 absolute -left-[40px] -top-[12px] z-0">
              {elementsArray.map((_, index) => (
                <Image
                  src={"/green_dot.svg"}
                  width={10}
                  height={10}
                  key={index}
                  className="z-0"
                  alt="people"
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center flex-wrap max-w-[330px] max-h-[313px] gap-[16px] opacity-50">
          <Image src={"/green_dot.svg"} width={10} height={10} />
          {elementsArray.map((_, index) => (
            <Image src={"/green_dot.svg"} width={10} height={10} key={index} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
