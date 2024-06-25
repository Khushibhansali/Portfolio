import React from "react"

const Menu = (props) => {
    return <div className="menu">
                <li>
                    <a href="#">{props.children}</a>
                </li>
           </div>
}

export default Menu