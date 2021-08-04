import Business from './Business';
import './BusinessList.css';

const BusinessList = props => {
    return (
        <div className="businessList">
            {!props.loading ? props.businesses ? 
            props.businesses.map(business => 
            { return <Business key={business.id} business={business}/>}) : 
            <div>This service may not be available at this location. Try a different location.</div>
            :<div className="loading">
                <div></div><div></div><div></div>
                </div>}
        </div>

    );
}

export default BusinessList;
