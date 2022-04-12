import Button from "../Button";

function Ticket(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ textAlign: "center" }}>
                <h1 style={{color: props.color}}>Ticket</h1>
                <p>Email</p> <input type={"text"}></input>
                <p>Title</p><input type={"text"}></input>
                <p>Category</p> 
                    <select>
                        <option>(Please Select a Reason)</option>
                        <option>Question</option>
                        <option>Change Insurance Data</option>
                        <option>Complaint</option>
                        <option>Others</option>
                    </select>
                <p>Content</p><textarea></textarea>
                <div style={{ height: "30px" }}></div>
            </form>
            <Button>Submit</Button>
        </div>
        
    );
    
}

export default Ticket;