import Axios from 'axios';
import {Content} from './styled';
import {Container} from './styled';
import { useEffect,useState } from 'react';
export function Page (){
    
   const [coins,setCoins] = useState<CoinList[]>([]);
   const [searchWord, setSearchWord] = useState("");

   const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

   interface CoinList{
       name:string;
       symbol:string;
       price:number;
       marketCap:number;
       priceChange1d:number;
       icon:string;
   } 

   useEffect(()=>{
       Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(response=>{
           setCoins(response.data.coins)
       })
   },[])
    
    return(
    <>
    <Container>
      
      <Content>  
        <div className='title'>
          <h1>
           Bem vindo ao Crypto hoje
          </h1> 
        </div>
        
      
      <div className='search'>
      <input type="text" placeholder='Bitcoin....'
         onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        ></input>
      </div>
       

        {filteredCoins.map(coin=>{
        return(
         <div className='coin'> 
            <ul>
         
            <li>
              <div className='footer-item-img'> 
              <img src ={`${coin.icon}`}></img>
              </div>                
               <p className='footer-item'>NOME: {`${coin.name}`}</p>
               <p className='footer-item'>SIMBOLO: {`${coin.symbol}`}</p>
               <p className='footer-item'>PREÇO:  ${`${coin.price}`}</p>
               <p className='footer-item'>CAP. DE MERCADO:  ${`${coin.marketCap}`}</p>
              
             
              
              
             
           </li>
         
      
          
           
       </ul> 
        </div>
       
         )})}
        </Content> 
      
        </Container>
        </> 
     
    )
   
}