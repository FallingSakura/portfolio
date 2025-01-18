import '@/styles/scroll-to-bottom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
function ScrollToBottom() {
  return (
    <div className="scroll-to-bottom">
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  )
}
export default ScrollToBottom