import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();

    function handleLogin(){
        const isAuth = true;

        if (isAuth){
            navigate("/dashboard");
        } else{
            alert("Ошибка авторизации!");
        }
    }

    return(
        <div style={{padding: "20px", fontFamily: "Verdana", color: "white"}}>
            <h1>Страница входа</h1>
            <p>Пока просто нажми на кнопку, а там посмотрим</p>
            <br/>
            <button onClick={handleLogin}>  Нажми!  </button>
            <br/>
            <br/>
            <img style={{width:"200px", height:"200px"}} src="https://i.pinimg.com/236x/f7/bd/b5/f7bdb51ca27bc34aed6679ae516f78e6.jpg"/>
        </div>
    );    
}

