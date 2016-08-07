import React from 'react'

class ApiApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { products: [] }
    }

    componentWillMount () {

        console.log("mona");

        fetch('http://localhost:8080/api/v1/products', {
            method: 'GET',
            mode: 'cors',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            }
        }) .then((response) => {
            return response.json()
        }) .then((products) => {

                this.setState(
                    {
                        products: products ,
                    })
            })
            .catch(function(err) {
                console.log("error" + err);
            });



    }

    render() {
        if (this.state.products.length > 0) {
            //TODO: introduce styles
            return (
                <ul >
                    {
                        this.state.products.map(function(products,index) {
                            var arrayCurrency = Object.keys(products.prices);
                            var myMapIndex = [];
                            var myMapValue = [];
                            arrayCurrency.map(function(index) {
                                myMapIndex.push( index);
                                myMapValue.push( products.prices[index]);
                            })

                            return <li key={index}>
                                {products.id}
                                <br />
                                {products.name}
                                <br />
                                {products.description}
                                <br />
                                {products.tags}
                                <br />
                                {myMapIndex[index]} ->  {myMapValue[index]}
                                <br />  <br />

                            </li>
                        })
                    }
                </ul>
            )

        } else {
            return <p className="text-center">Loading products...</p>
        }
    }
}
export default ApiApp  ;