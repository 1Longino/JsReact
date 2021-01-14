import React, {Component} from 'react';
class User extends Component{
    render(){

        const {
            name,
            arrayOfNumbers,
            age,
            funcionFlecha,
            users,
            isActivated,
            title
        } = this.props

        const estado = this.props.isActivated ? 'Conected' : 'Disconected';
        return(
            <div>
                {title}
                {`hola mi nombre es: ${this.props.name},
                i'm X age, 
                ok jaj and i am react front end developer`}
                <p>{age}</p>
                <p>{isActivated}</p>
                <p>{arrayOfNumbers.map(funcionFlecha).join(', ')}</p>
                <p>{users.key}</p>
        <       p>{estado}</p>
            </div>
        )
    }
}

const CompDefProps = (props) => {
    return(
        <h1>{props.text}</h1>
    )
}

CompDefProps.defaultProps = {
    text: 'Default Text'
}

class ContainerPropsClass extends Component {
    render(){
        return(
            <div>
                <User
                    title={<h4>This is class component with props</h4>}
                    name="Luis Enrique"
                    age="3"
                    arrayOfNumbers={[1,2,3,4,5]}
                    funcionFlecha={n => n*2}
                    users={{ key: 'Luis',key2: 'juan'}}
                    isActivated

                />
                <h4>This is function component with default Props</h4>
                <CompDefProps text="Value of New Text"/>
                <hr/>
                
            </div>
        )
    }
}
export default ContainerPropsClass;