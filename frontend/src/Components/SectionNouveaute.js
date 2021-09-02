import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


function SectionNouveaute( props) {
    const {product} = props
    // console.log(product)

    return (
        
        <Fragment>
             <div className="article col-md-2 col-xs-6">
                    <div className="article-img">
                        <Link to={`/product/${product._id}`}><img src={product.image} alt={`image ${product.name}`}/></Link>
                    </div>
                    <p className="article-name">{product.name} </p>
                    <p className="article-prix">{product.price}</p>
                    <div className="article-panier">
                        <img src="img/panier3.svg" alt="ajouter au panier"/>
                    </div>
  
                </div>
        </Fragment> 
    )
}

export default SectionNouveaute
