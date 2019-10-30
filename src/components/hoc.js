import React from 'react';
import axios from 'axios';

export default function hoc(MyComponent, url) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                cards: []
            }
        }

        async componentDidMount() {
            const response = await axios.get(url)
            this.setState({
                cards: response.data.cards
            })
        }

        render() {
            return <MyComponent {...this.props} data={this.state.cards}/>
            
        }
    }
}