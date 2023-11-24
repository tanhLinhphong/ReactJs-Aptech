import './App.css';
import {FaStar} from 'react-icons/fa'
import ItemCard from './component/ItemCard';
import ItemList from './component/ItemList';
import PricingPage from './component/PricingPage';
const Product=({rating})=>{
    const stars = Array.from({length:5},(_,index)=>(
        <FaStar key={index} color={rating>index ? '#ffc107':'#e4e5e9'}/>
    ));
    return(
        <div>
            <h1>{stars}</h1>
        </div>
    );
}
export default function App2(){
    const stars=Array.from({length:5},(_,index)=>(
        <FaStar key={index} color={index<1 ? 'orange':'grey'}/>
    ));
    return(
        <div>
            <h1>Welcome</h1>
            {stars}
        </div>
    )
}