import React,{Component} from 'react';
class CondicionarRenderClasses extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        const name = this.inputName.value
        const age = document.getElementById('age').value
        console.log({name, age});
    }
    render(){
        const options = ["Si","No"]
        return (
            <div>
                <h1>Renderizado Condicional con Formularios</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input
                            id='name'
                            name='name'
                            placeholder='Ingresa nombre'
                            ref={inputElement => this.inputName = inputElement}
                        />
                    </p>
                    <label>Mayor de Edad</label>
                    <select id="age">
                        <option>Si </option>
                        <option>No </option>
                    </select>
                    <button>
                        Send
                    </button>
                </form>
            </div>
        )
    }
}
export default CondicionarRenderClasses;