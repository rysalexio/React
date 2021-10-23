
function Inputs() {

        return (
        <div >
                <input ref={name} />
                <br />
                <input ref={text} />
                <br />
                <button onClick={listChange}>Send Message</button>
        </div>
    ); 
};
export default Inputs;