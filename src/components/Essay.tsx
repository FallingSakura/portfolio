import styles from "@/styles/essay.module.css";
import { useRef } from "react";
const Essay = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="essay" className={`${styles["essay"]}`}>
      <div className={`${styles["essay-content"]}`}>
        <header>
          <div ref={headerRef} className={`${styles["descr"]} card`}>
            <h2>Essay</h2>
            <p>
              I am a student of Computer Science and Engineering at the
              University of California, San Diego. I am interested in machine
              learning and artificial intelligence. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Animi at consequatur ratione.
              Voluptates magnam blanditiis placeat corporis dolorem possimus
              minus, officia incidunt. Eos ad at voluptas ratione aperiam, ipsa
              consequatur? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Magni velit doloribus quasi, veritatis, saepe odio
              reprehenderit sed perspiciatis modi aperiam quis suscipit, enim
              voluptate necessitatibus est consectetur eos sunt consequatur!
            </p>
          </div>
          <div className={`${styles["copilot-button"]} card`}></div>
        </header>
        <main>
          <div className="card"></div>
          <div className="card"></div>
        </main>
      </div>
    </div>
  );
};

export default Essay;
