import '@/styles/background.css' // 创建对应的 CSS 文件

const Background = () => {
  return (
    <div className="background-container">
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
        </div>
      </div>
      <div className="blur-effect"></div>
    </div>
  )
}

export default Background
