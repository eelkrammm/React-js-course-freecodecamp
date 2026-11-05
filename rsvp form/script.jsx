const { useState } = React;

export function EventRSVPForm() {
  
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [number, setNumber] = useState(""); 
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [bringingAdditional, setBringingAdditional] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

function handleSubmit(e){
e.preventDefault()
setIsSubmitted(true);
}


  return(
    <div id="container">
    <h1>Event RSVP Form</h1>
    <form onSubmit={handleSubmit}>
    <label><span>Name</span>
    <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
    </label>
    <label>
    <span>Email</span>
    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
    </label>
    <label>
    <span>Number of Attendees</span>
    <input type="number" min="1" required value={number} onChange={(e) => setNumber(e.target.value)} />
    </label>
    <label>
    <span>Dietary Preferences</span>
    <input type="text" value={dietaryPreferences} onChange={(e) => setDietaryPreferences(e.target.value)}/>
    </label>
    <label id="additional">
    <span>Bringing additional guest</span>
    <input type="checkbox" value={bringingAdditional} onChange={(e) => setBringingAdditional(e.target.value)}></input>
    </label>
    <button type="submit">Submit RSVP</button>
    </form>

    <div>
    {isSubmitted ? <p>Name: {name}</p> : ""}
    {isSubmitted ? <p>Email: {email}</p> : ""}
    {isSubmitted ? <p>Number: {number}</p> : ""}
    {isSubmitted && (
  <>
    <p>Dietary Preferences: {dietaryPreferences || "None"}</p>
    <p>Bringing Others: {bringingAdditional ? "yes" : "no"}</p>
  </>
)}


    </div>


    </div>
  )
}
