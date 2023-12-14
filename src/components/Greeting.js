import React,{useState} from "react";

const Greeting=()=>{
    const [greetmsg,setGreetMsg] = useState("");
    return(
        <div>
            <label htmlFor="greetmsg">Enter your name:</label>
            <br />
            <br />
            <input type="text" name="greetmsg" id="greetmsg" onChange={(e)=>{
                setGreetMsg(`Hello ${e.target.value}!`)
            }}/>
            <p>{greetmsg}</p>
        </div>
    )
}
export default Greeting;