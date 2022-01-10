import PropTypes from 'prop-types';
import './Business.css';

const Business = props => {
	return (
		<div className="business-container">
			<a href={props.url}>
			  <div className="business-image-container">	  
			    <img src={props.imageSrc} alt={props.name}/>
			  </div>
			  <h2>{props.name}</h2>
			  <div className="business-info">
			    <div className="business-address">
			      <p>{props.address}</p>
			      <p>{props.city}</p>
			      <p>{props.state} {props.zipCode}</p>
			    </div>
			    <div className="business-reviews">
			      <h3>{props.price}</h3>
			      <h3 className="business-rating">{props.rating} Stars</h3>
			      <p>{props.reviewCount} reviews</p>
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
	price: '0',
	state: 'N/A',
	rating: '0',
	review: '0',
	url: '',
	zipcode: 'N/A'
}

export default Business;