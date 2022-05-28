const Stat = ({heading, stat}) => {
    const isNumber = parseInt(stat);
    return (
        <div className="flex-direction-col stat">
            <h3>{heading  || 'Heading'}</h3>
                <span>
                    {stat ? 
                        isNumber ? 
                            stat.toLocaleString('en', {useGrouping:true} ) : 
                        stat: 
                    '-'}
                </span>
        </div>
    )
}

export default Stat;