import { PropTypes } from 'react'
import { ago } from '../../lib/time-helpers'

const TimeAgo = ({timestamp}) => {
    return <div className="time-ago">
        { ago(timestamp) } ago
    </div>
};

TimeAgo.propTypes = {
    timestamp: PropTypes.string.isRequired
};

module.exports = TimeAgo;