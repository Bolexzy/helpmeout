import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";

const Features = () => {
  return (
    <div className={styles.features}>
      <div>
        <h3>Features</h3>
        <p>Key Highlights of Our Extension</p>
      </div>
      <div className="flex gap-[56px] align-center">
        <div className="flex gap-[16px] items-start self-stretch">
          <Image src={"/record-circle.png"} width={32} height={32} alt="record" />
          <div className="flex flex-col align-start gap-[8px] self-stretch max-w-[480px]">
            <h4 className={styles.textHead}>Simple Screen Recording</h4>
            <p className={styles.textBody}>
              Effortless screen recording for everyone. Record with ease, no
              tech expertise required.
            </p>
          </div>
        </div>
        <Image src={"/Video Repository.png"} width={635} height={455} alt="landing-image" />
      </div>
    </div>
  );
};

export default Features;
