import '@/styles/essay.css'
const Essay = () => {
  return (
    <div
      id="essays"
      className="eassy"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'white',
          overflow: 'scroll'
        }}
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae rerum
          quos laudantium minima quisquam odio vitae consequuntur culpa,
          necessitatibus obcaecati aperiam voluptatem accusamus, alias
          voluptatum facere sed a doloribus! Tempora.
        </span>
      </div>
    </div>
  )
}

export default Essay
