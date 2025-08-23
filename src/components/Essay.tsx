import "@/styles/essay.css";
const Essay = () => {
  return (
    <div id="essay" className="essay">
      <div className="essay-content">
        <header>
          <div className="descr card">
            <h2>Essay</h2>
            <p>
              I am a student of Computer Science and Engineering at the
              University of California, San Diego. I am interested in machine
              learning and artificial intelligence. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Animi at consequatur ratione.
              Voluptates magnam blanditiis placeat corporis dolorem possimus
              minus, officia incidunt. Eos ad at voluptas ratione aperiam, ipsa
              consequatur?
            </p>
            <div className="card copilot-button"></div>
          </div>
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
