import about from "../../about";

function Info(props) {
    return (
        <div style={{ textAlign: "center" }}>   
            <h1 style={{color: props.color}}>About DappInsurance</h1> 
            <p> {about}</p>
        </div>
    );
}

export default Info;