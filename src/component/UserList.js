import User from "./User";
 const users=[
    {
        name:"Halland",
        pic :"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Erling_Haaland_2023_%28cropped%29.jpg/800px-Erling_Haaland_2023_%28cropped%29.jpg"
    },
    {
      name: "Alvarez"  ,
      pic :"https://upload.wikimedia.org/wikipedia/commons/1/13/Arg_vs_mex_julianalvarez_ochoa_y_messi_%28cropped%29.jpg"
    },
      {
        name:"Kevin",
        pic:"https://upload.wikimedia.org/wikipedia/commons/0/05/Kevin_De_Bruyne_%28cropped%29.jpg"
      }  
 ]
 export default function UserList(){
    return(
        <div className="App">
            {users.map((usr)=>(
                <User name={usr.name} pic={usr.pic}/>
            ))}
        </div>
    )
 }