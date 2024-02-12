const ErrorMessage =({ok})=>{

    let food=["banana", "mango", "apple", "milk"];
    return( <>{ok.length ===0 && <h3>i am hungry</h3>}</>);
}

export default ErrorMessage;