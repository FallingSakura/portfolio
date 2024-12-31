import '../styles/ToggleButton.css';

function ToggleButton({
  togglNav,
  toggle,
}: {
  togglNav: boolean;
  toggle: () => void;
}) {
  return (
    <div className={"toggle-button-container"}>
      <div className="toggle-button" onClick={toggle}>
        <span className={`toggle-bar ${togglNav ? "bar-hidden" : "bar1"}`}></span>
        <span className={`toggle-bar ${togglNav ? "bar-rotate-45" : "bar2"}`}></span>
        <span className={`toggle-bar ${togglNav ? "bar-rotate--45" : "bar3"}`}></span>
      </div>
    </div>
  );
}

export default ToggleButton;