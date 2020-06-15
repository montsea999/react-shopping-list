import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
<div>
  <h1> { props.myName }'s { props.nameTitle } </h1>
  <hr/><hr/>
  </div>
  )
  class Product extends React.Component {
    constructor() {    
      super()

      const METHODS = [    
        'add',
        'remove',
        'reset'
      ]
      METHODS.forEach((method) => {
        this[method] = this[method].bind(this)
      })    
      this.state = {
        quantity: 0
      }
    }
    add() {
      this.setState({ quantity: this.state.quantity + 1 
      })
    }
    remove() {
      this.setState({ quantity: this.state.quantity - 1 
      })
    }
    reset() {
      this.setState({ quantity: 0
      })
    }
    render() {  
      return (   
        <div>     
          <p><b> { this.props.name } </b>&nbsp; { this.props.description } </p>                                                
           <p><b> quantity: <b></b>{ this.state.quantity } &nbsp; &nbsp;&nbsp; &nbsp;
           &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          <button onClick={ this.add }> + </button>
          <button onClick={ this.remove }> - </button>
          <button onClick={ this.reset }> reset </button>
          </b></p>
        
          
          <hr/>
        </div>
       ) 
    }
  }
  
var frutaDeTemporada = "sandía"  

const App = () => (    
  <div>
    <Title myName = 'Montse' nameTitle = 'Shopping List'/>
    <Product name = { 'manzana' }  description = '   Fuji '/>
    <Product name = { 'pera' }  description = '  Conferencia  '/>
    <Product name = { 'plátano' }  description = '  de Canarias ' />
    <Product name = { 'kiwi' }  description = '  amarillo ' />
    <Product name = {`${ frutaDeTemporada }`} description = ' fruta de temporada que variará trimestralmente ' />
   </div>
)
ReactDOM.render(<App/>, document.getElementById('root'))
