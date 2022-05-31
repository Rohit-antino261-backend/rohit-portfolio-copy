import "./portfoliolist.scss"

function PortfolioList({title ,active , id , setSelected}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=>setSelected(id)}>
          {title}
    </li>
  )
}

export default PortfolioList