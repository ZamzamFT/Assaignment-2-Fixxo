import {NavLink} from 'react-router-dom'




const Deals = () => {
 

  return (
    <> 
      <div className='offer'>
        <h2>2 FOR USD $29</h2>
        <NavLink to="/products" className="button sale-btn" end>
          <span className="corner-left"></span>
          <span className="corner-right"></span>
          FINALE SALE
          </NavLink>
      </div>
         
    </>
  )
}

export default Deals
