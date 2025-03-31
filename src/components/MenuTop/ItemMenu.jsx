function ItemMenu({data}) {
    return(
        <>
            <li className="nav-item">
                <a className={data.active ? "nav-link active" : "nav-link"} aria-current="page"
                   href="#">{data.title}</a>
            </li>
        </>
    )
}

export default ItemMenu