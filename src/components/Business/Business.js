import PropTypes from 'prop-types';
import './Business.css';

const Business = ({address, city, imageSrc, name, price, state, 
				   rating, reviewCount, url, zipCode}) => {
	return (
		<div className="business-container">
			<a href={url}>
			  <div className="business-image-container">	  
			    <img src={imageSrc} alt={name}/>
			  </div>
			  <h2>{name}</h2>
			  <div className="business-info">
			    <div className="business-address">
			      <p>{address}</p>
			      <p>{city}</p>
			      <p>{state} {zipCode}</p>
			    </div>
			    <div className="business-reviews">
			      <h3>{price}</h3>
			      <h3 className="business-rating">{rating} Stars</h3>
			      <p>{reviewCount} reviews</p>
    				</div>
  				</div>
			  </a>
		</div>
	)
}

Business.propTypes = {
	name: PropTypes.string
}

Business.defaultProps = {
	address: 'N/A',
	city: 'N/A',
	category: 'N/A',
	imageSrc: '',
	name: 'N/A',
	price: '',
	state: 'N/A',
	rating: '',
	review: '',
	url: '',
	zipcode: 'N/A'
}

export default Business;