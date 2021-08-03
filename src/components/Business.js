import './Business.css';

const Business = props => {
	return (
		<div className="business-container">
			<a href={props.business.url}>
			  <div className="business-image-container">	  
			    <img src={props.business.imageSrc} alt={props.business.name}/>
			  </div>
			  <h2>{props.business.name}</h2>
			  <div className="business-info">
			    <div className="business-address">
			      <p>{props.business.address}</p>
			      <p>{props.business.city}</p>
			      <p>{props.business.state} {props.business.zipCode}</p>
			    </div>
			    <div className="business-reviews">
			      <h3>{props.business.price}</h3>
			      <h3 className="business-rating">{props.business.rating} Stars</h3>
			      <p>{props.business.reviewCount} reviews</p>
    				</div>
  				</div>
			  </a>
		</div>
	)
}

export default Business;