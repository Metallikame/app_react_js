import React from "react";
import './index.css';

class App extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const {DataisLoaded, items} = this.state;
        if (!DataisLoaded) return <div>
            <h1> Un peu de patience les données son en train de charger... </h1></div>;

        return (
            <div className="App">
                <h1> Récupération des données </h1>
                {
                    items.map((item) => (
                        <ol key={item.id}>
                            Pseudo : {item.username} // Nom : {item.name} // Adresse mail : {item.email}
                        </ol>
                    ))
                }
            </div>
        );
    }
}

export default App;
