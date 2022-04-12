import styled from "styled-components";

function BottomTile(props)
{
    return (
        <div style={{ backgroundColor: "white", width: "80%", textAlign: "center", borderRadius: "40px" }}>
            <p style={{ fontSize: "45px" }}>Contact Us</p>
            <div style={{ height: "30px" }}></div>
            <div>
                <Button style={{ marginRight: "10px" }} onClick={ () => { props.setPopUp(0); props.setTrigger(true) }}>File a Claim</Button>
                <Button style={{ marginLeft: "10px" }} onClick={ () => { props.setPopUp(1); props.setTrigger(true) }}>Ticket</Button>
            </div>
            <div style={{ height: "30px" }}></div>
            
            
        </div>
    );
}

export default BottomTile;

const Button = styled.button`
    font-size: 18px;
    height: 50px;
    width: 200px;
    background-color: white;
    color: #d674c9;
    padding: 5px 15px;
    border-radius: 10px;
    border: 1px solid #d674c9;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #d674c9;
        color: white;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;