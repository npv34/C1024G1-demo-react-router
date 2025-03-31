import {useParams} from "react-router";

function UserEdit() {
    const {uid} = useParams();

    return (
        <>
            <h1>User Edit: { uid }</h1>
        </>
    )
}

export default UserEdit