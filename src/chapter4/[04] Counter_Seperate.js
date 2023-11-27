function MyButton(){
    return(
        <button>
            click me
        </button>
    );
}
export default function MyApp(){
    return(
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
        </div>
    );
}