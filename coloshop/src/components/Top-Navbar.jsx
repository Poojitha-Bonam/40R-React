import "./Topnavbar.css"

const TopNavbar = () => {
  const price=50
  return <nav style= {{backgroundColor:"black",color:"white", display:"flex",justifyContent:"space-between",padding:"5px 10px"}}>
    <div>
      <p>FREE SHIPPING ON ALL U.S ORDERS OVER ${price}</p>
    </div>

    <div className="top-navbar-container2">
      <p>USD</p>
      <p>English</p>
      <p>My account</p>
    </div>
  </nav>
}
export default TopNavbar