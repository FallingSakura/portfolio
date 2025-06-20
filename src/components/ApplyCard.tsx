import { useState } from 'react'
import '@/styles/apply-card.css'
const ApplyCard = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [focus, setFocus] = useState('')
  return (
    <div
      className={`apply ${isHovered || focus !== '' ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`apply-wrapper`}>
        <div className="front-side">
          <h2>Apply for a friend link?</h2>
        </div>
        <div className="back-side">
          <form>
            <label
              htmlFor="name"
              style={{
                color: focus === 'name' ? 'var(--color-primary)' : ''
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Nick Name"
              onFocus={() => {
                setFocus('name')
              }}
              onBlur={() => {
                setFocus('')
              }}
            />
            <label
              htmlFor="github"
              style={{
                color: focus === 'github' ? 'var(--color-primary)' : ''
              }}
            >
              Github
            </label>
            <input
              type="text"
              id="github"
              name="github"
              placeholder="Your Github Name"
              onFocus={() => {
                setFocus('github')
              }}
              onBlur={() => {
                setFocus('')
              }}
            />
            <label
              htmlFor="website"
              style={{
                color: focus === 'website' ? 'var(--color-primary)' : ''
              }}
            >
              Website
            </label>

            <input
              type="text"
              id="website"
              name="website"
              placeholder="Your Website URL"
              onFocus={() => {
                setFocus('website')
              }}
              onBlur={() => {
                setFocus('')
              }}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplyCard
