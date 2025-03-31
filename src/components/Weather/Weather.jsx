import {Component} from "react";
import {Box, CircularProgress} from "@mui/material";

class Weather extends Component{

    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            isLoading: true
        };
    }

    componentDidMount() {
       setTimeout(() => {
           this.setState({
               temp: 24,
               isLoading: false,
           })
       }, 3000)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
        return (
            <>
                { this.state.isLoading ?
                    <Box sx={{ display: 'flex', position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center', }}>
                    <CircularProgress />
                    </Box>

                    : (
                    <div className="card">
                        <div className="card-header">Weather</div>
                        <div className="card-body">
                            <h5 className="card-title">City: </h5>
                            <p className="card-text">Temperature: {this.state.temp}°C</p>
                            <p className="card-text">Humidity: %</p>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

export default Weather;