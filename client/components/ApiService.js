import React from "react";
import ApiResponse from "./ApiResponse";

const ApiService = React.createClass({


    render() {
        return (

            <div className="product-grid">
                <figure className="grid-figure">
                    Method:
                </figure>

                <figure className="grid-figure">
                    <ApiResponse/>
                </figure>
            </div>



        )
    }
});

export default ApiService;