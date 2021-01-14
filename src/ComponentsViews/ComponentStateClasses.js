import React, {Component} from 'react';
class Pedidos extends Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state = { count: this.props.countInitial, name: 'Luis Enrique'}
            setInterval(() => {
                this.setState({ count: this.state.count + 1}) 
            }, 1000)
    }
    //state = {count: 1, name: 'Luis Enrique'} //Otra forma de inicializar el estado con Class Field
    
    render () {
        return(
            <div>
                <h3>{this.state.name}</h3>
                <p>Propagación de las Componentes</p>
                <ComponentNumber cont={this.state.count}/>
            </div>
        )
    }
}

//componente que muestra el estado del componente pedidos
class ComponentNumber extends Component{
    render(){
        return <span>{this.props.cont}</span>
    }
}

Pedidos.defaultProps = {
    countInitial: 0
}
class ComponentStateClasses extends Component {
    render(){
        return(
            <div className="App">
                <h3>This is a First Component with State</h3>
                <Pedidos countInitial={50}/>
            </div>
        )
    }
}
export default ComponentStateClasses;