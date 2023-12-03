import { Component} from "react"
import './Form.css'
 class Web extends Component{
    state={
        name:"",
        fin:"",
        gender:"",
        age:"",
        email:"",
        phonenumber:"",
        password:"",
        type:"password",
    }


    handleName=(e)=>{
        this.setState({name:e.target.value})
    }
    handleFin=(e)=>{
        this.setState({fin:e.target.value})
    }
    handleGender=(e)=>{
        this.setState({gender:e.target.value})
    }
    handleAge=(e)=>{
        this.setState({age:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handlePhonenumber=(e)=>{
        this.setState({phonenumber:e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }

    
    handleClick1=(e)=>{
        this.setState({name:''})
    }
    handleClick2=(e)=>{
        this.setState({fin:' '})
    }
    handleClick3=(e)=>{
        this.setState({gender:' '})
    }
    handleClick4=(e)=>{
        this.setState({age:' '})
    }
    handleClick5=(e)=>{
        this.setState({email:' '})
    }
    handleClick6=(e)=>{
        this.setState({phonenumber:' '})
    }
    handleClick7=(e)=>{
        this.setState({password:' '})
    }


    handleCheckboxChange =()=>this.setState({type:this.state.type==='text'?'password':'text'})
    
    render(){
        console.log(this.state)
        return(
            <div className="nemo">
                <label htmlFor=".">Name:
                <input type="text" id="name"name="name"onChange={this.handleName}/><button type="button" className="btn" onClick={this.handleClick1}>x</button></label>

                <label htmlFor=".">Fin kod:
                <input type="text" id="fin"name="fin"onChange={this.handleFin}/><button type="button" className="btn" onClick={this.handleClick2}>x</button></label>

                <label htmlFor=".">Male:
                <input type="radio" id="gender"name="gender"onChange={this.handleGender}/></label>
                <label htmlFor=".">Female:
                <input type="radio" id="gender"name="gender"onChange={this.handleGender}/></label>

                <label htmlFor=".">Age:
                <input type="number" id="age"name="age"onChange={this.handleAge}/><button type="button" className="btn" onClick={this.handleClick4}>x</button></label>

                <label htmlFor=".">Email:
                <input type="text" id="email"name="email"onChange={this.handleEmail}/><button type="button" className="btn" onClick={this.handleClick5}>x</button></label>

                <label htmlFor=".">Phone number:
                <input type="tel" id="phonenumber"name="phonenumber"onChange={this.handlePhonenumber}/><button type="button" className="btn" onClick={this.handleClick6}>x</button></label>

                <label htmlFor=".">Password:
                <input type={this.state.type} id="password"name="password"onChange={this.handlePassword}/><button type="button" className="btn" onClick={this.handleClick7}>x</button></label>
            Show Passwords:
            <input type="checkbox" checked={this.state.isActive} onChange={this.handleCheckboxChange}/>
            </div>
        )
    }
 }
 export default Web;