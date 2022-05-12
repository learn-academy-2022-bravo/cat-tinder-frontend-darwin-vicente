import React, { Component } from 'react';

class Show extends Component {

    render() {
        let {cat} = this.props
        return (
            <>
              <h2>Cat Show</h2>  
              <p>Name:{cat.name}</p>
              <p>Age:{cat.age}</p>
              <p>Enjoys:{cat.enjoys}</p>
              <img src={cat.image} width="200px" />

            </>
        );
    }
}

export default Show;