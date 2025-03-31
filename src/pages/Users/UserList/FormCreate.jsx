import {Component} from "react";

class FormCreate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: "Xin chao",
            count: 0
        };
    }

    componentDidMount() {
        console.log("Component FormCreate is mounted")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component FormCreate is updated")
    }

    componentWillUnmount() {
        console.log("Component FormCreate is unmounted")
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <>
            <h1>{this.state.message}</h1>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}>+</button>
        </>

    }
}


export default FormCreate;