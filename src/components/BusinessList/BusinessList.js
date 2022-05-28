import Business from '../Business/Business';
import './BusinessList.css';

const BusinessList = ({businesses, heading, loading}) => {
    return (
        <div>
            <h2>{heading || 'Businesses'}</h2>
            <div className="businessList">
                {!loading ? businesses.length ? businesses.map(business => 
                { return <Business 
                            key={business.id} 
                            address={business.address}
                            city={business.city} 
                            category={business.category} 
                            imageSrc={business.imageSrc}
                            name={business.name} 
                            price={business.price} 
                            state={business.state}
                            rating={business.rating} 
                            review={business.review} 
                            url={business.url}
                            zipcode={business.zipcode}
                        />}) : 
                <div>This service may not be available at this location. Try a different location.</div>
                :<div className="loading">
                </div>}
            </div>
        </div>

    );
}

export default BusinessList;
