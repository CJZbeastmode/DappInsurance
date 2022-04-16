import Button from "../Button";
import { appendTicket } from "../../database";

function Ticket(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ textAlign: "center" }}>
                <h1 style={{color: props.color}}>Ticket</h1>
                <p>Email</p> <input id="email" type={"text"}></input>
                <p>Title</p><input id="title" type={"text"}></input>
                <p>Category</p> 
                    <select id="category">
                        <option>(Please Select a Category)</option>
                        <option>Question</option>
                        <option>Change Insurance Data</option>
                        <option>Complaint</option>
                        <option>Others</option>
                    </select>
                <p>Content</p><textarea id="content"></textarea>
                <div style={{ height: "30px" }}></div>
            </form>
            <Button onClick={() => submit(props)}>Submit</Button>
        </div> 
    );
}

function submit(props)
{
    var email = document.getElementById('email').value;
    var title = document.getElementById('title').value;
    var category = document.getElementById('category').value;
    var content = document.getElementById('content').value;
    if (email === '' || title === '' || !email.includes('@', 0) || content === '' || category === '(Please Select a Category)')
    {
        alert("Failure: At least one of the fields is invalid!");
    }
    else
    {
        appendTicket(email, title, category, content);
        alert("Success!");
        props.setTrigger(false);
    }
}

export default Ticket;