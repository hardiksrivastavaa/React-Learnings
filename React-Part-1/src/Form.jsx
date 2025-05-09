
export default function Form() {

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log("Form Was Submitted!");
    }

  return (

    <form>
        <input type="text" placeholder="hardik" />
        <button onClick={handleFormSubmit}>Submit</button>
    </form>
    
  )
}
