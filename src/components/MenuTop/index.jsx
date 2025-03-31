import FormSearch from "./FormSearch.jsx";
import ListMenu from "./ListMenu.jsx";
import {useState} from "react";

function MenuTop() {
    const [pageTitle, setPageTitle] = useState("EShop")

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{ pageTitle }</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ListMenu/>
                        <FormSearch/>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default MenuTop