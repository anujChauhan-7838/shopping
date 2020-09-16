import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.style.scss';
const MenuItem = ({title, imageUrl,size,history,url,match}) =>(
    
    <div 
    style={
        {
            backgroundImage:`url(${imageUrl})`
        }
    }
    className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${url}`)}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <p className="subtitle">Shop Now</p>
        </div>
    </div>
)

export default withRouter(MenuItem);