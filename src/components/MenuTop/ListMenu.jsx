import {useState} from "react";
import ItemMenu from "./ItemMenu.jsx";
import { v4 as uuidv4 } from 'uuid';


function ListMenu() {
    const [listItem, setListItem] = useState([
        {
            title: "Home",
            url: "/home",
            active: true,
        },
        {
            title: "Shop",
            url: "/shop",
            active: false,
        },
        {
            title: "About",
            url: "/about",
            active: false,
        }
    ])



    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            { listItem.map(item => (
                <ItemMenu key={uuidv4()} data={item}/>
            ))}

        </ul>
    )
}

export default ListMenu