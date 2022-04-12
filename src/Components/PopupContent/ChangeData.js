import Button from "../Button";

function ChangeData(props)
{
    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ textAlign: "center" }}>
                <h1 style={{color: props.color}}>Change Data</h1>
                <p>Description</p> <textarea></textarea>
                <p>Insurance Password</p> <input type={"password"}></input>
                <div style={{ height: "30px" }}></div>
            </form>
            <Button>Submit</Button>
        </div>
        
    );
}
export default ChangeData;