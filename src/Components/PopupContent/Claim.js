import Button from "../Button";

function Claim(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ textAlign: "center" }}>
                <h1 style={{color: props.color}}>Claim</h1>
                <p>Wallet Account</p> 0x<input type={"text"}></input>
                <p>Reason</p> 
                    <select>
                        <option>(Please Select a Reason)</option>
                        <option>I forgot the recovery phrase.</option>
                        <option>My physical devices are hacked.</option>
                        <option>My wallet is hacked</option>
                        <option>I'm phished.</option>
                    </select>
                <p>Description</p><textarea></textarea>
                <p>Insurance Password</p> <input type={ "password" } style={{height: "20px"}}></input>
                <div style={{ height: "30px" }}></div>
            </form>
            <Button>Submit</Button>
        </div>
        
    );
}

export default Claim;