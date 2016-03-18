import React from 'react'
import { ago } from '../../lib/time-helpers'

const TimeAgo = ({timestamp}) => {
    return <div class="time-ago">
        { ago(timestamp) } ago
    </div>
};

module.exports = TimeAgo;