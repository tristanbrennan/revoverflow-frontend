import React, {useState} from 'react'

const style = {
    parent:{
        height: "100vh", 
        backgroundColor:"Salmon"
    }
}



const Faq: React.FC = ()=>{

    const [questions, setQuestions] = useState('')
    const [isAdmin, setIsAdmin] = useState(true)

    

    const getLocationQuestions = ()=>{
        //axios call
        setQuestions("location")
    }

    const getRevatureQuestions = ()=>{
        //axios call
        setQuestions("revature")
    }



    return(

        <div style={style.parent} className="Faq">
            <p>This is a modifications</p>
            <h1>User-FAQ</h1>
            <button id="revatureQ" onClick={getRevatureQuestions}>Revature Questions</button>
            <button id="locationQ" onClick={getLocationQuestions}>Location-based Questions</button>
            <h2>{questions === "revature" ? "Revature Questions" : (questions === "location" ? "Location-based Questions" : "")}</h2>

            {isAdmin && <div>This is admin Button</div> }
        </div>
        
    )


}

export default Faq;