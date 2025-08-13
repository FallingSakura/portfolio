import "@/styles/scroll-to-bottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function ScrollToBottom() {
  function scrollToBottom() {
    const pageContainer = document.querySelector(
      ".page-container",
    ) as HTMLElement;
    const scrollHeight = pageContainer.offsetHeight;
    pageContainer?.scrollBy({
      top: scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <div className="scroll-to-bottom" title="Go ahead" onClick={scrollToBottom}>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
}
export default ScrollToBottom;
