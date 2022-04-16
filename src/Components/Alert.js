function Alert(props)
{
    return props.success ? <Success message={ props.message } /> : <Failure message={ props.message } />;
}

function Success(props)
{
    return (
        <div style={{ backgroundColor: "#90EE90", width: "80%", textAlign: "center", borderRadius: "40px" }}>            
            <p style={{ fontSize: "20px", color: "#d674c9" }}>Success! { props.message }</p>
        </div>
    );
}

function Failure(props)
{
    return (
        <div style={{ backgroundColor: "#cc0000", width: "80%", textAlign: "center", borderRadius: "40px" }}>            
            <p style={{ fontSize: "20px", color: "black" }}>Failure! { props.message }</p>
        </div>
    );
}

export default Alert;