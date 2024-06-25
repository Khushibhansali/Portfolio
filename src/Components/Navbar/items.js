import React from "react"

const Items = (props) => {
    return <div className="dropdown-bloc">
                <ul>
                    {props.dropDwn.map(e => (
                                <li><a href= {e.link}>{e.title}</a></li>
                    ))} 
                </ul> 
           </div>
}
export default Items;