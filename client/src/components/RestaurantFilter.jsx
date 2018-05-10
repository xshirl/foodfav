import React from 'react';

export default fuction RestaurantFilter(props) {
    return(
        <div class='filter'>
            <input type='text' value={props.term} onChange={props.onChange} name='term'
            />
            <input type='text' value={props.term} onChange={props.onChange} name='location'
            />
            <input type='submit' value='Submit'/>
        </div>
    )
}