import Business from './Business';
import './BusinessList.css';

const BusinessList = props => {
    return (
        <div className="businessList">
            {!props.loading ? props.businesses ? 
            props.businesses.map(business => 
            { return <Business key={business.id} business={business}/>}) : 
            <div>No businesses found. Try different search parameters</div>
            :<div className="loading">
                <div></div><div></div><div></div>
                </div>}
        </div>

    );
}

export default BusinessList;
