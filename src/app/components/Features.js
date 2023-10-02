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
        <div className="flex flex-col gap-[56px]  text-left">
          <div className="flex gap-[16px] items-start self-stretch">
            <Image
              src={"/record-circle.png"}
              width={32}
              height={32}
              alt="record"
            />
            <div className="flex flex-col align-start gap-[8px] max-w-[480px] text-left">
              <h4 className={styles.textHead}>Simple Screen Recording</h4>
              <p className={styles.textBody}>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px] items-start self-stretch">
            <Image
              src={"/send-2.png"}
              width={32}
              height={32}
              alt="record"
              className="bg-[#413C6D] rounded-full p-[8px]"
            />
            <div className="flex flex-col align-start gap-[8px] max-w-[480px] text-left">
              <h4 className={styles.textHead}>Easy-to-Share URL</h4>
              <p className={styles.textBody}>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px] items-start self-stretch">
            <Image
              src={"/refresh-square-2.svg"}
              width={32}
              height={32}
              alt="record"
              className="bg-[#413C6D] rounded-full p-[8px]"
            />
            <div className="flex flex-col align-start gap-[8px] max-w-[480px] text-left">
              <h4 className={styles.textHead}>Revisit Recordings</h4>
              <p className={styles.textBody}>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <Image
          src={"/Video Repository.png"}
          width={635}
          height={455}
          alt="landing-image"
        />
      </div>
    </div>
  );
};

export default Features;
