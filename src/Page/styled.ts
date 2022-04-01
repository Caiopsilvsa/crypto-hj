import styled from 'styled-components'

export const Container =styled.div`
  
 
`

export const Butn = styled.button`

       
        background:#03bafc;
        color: white;
        border-radius: 20px;
        margin:0 20px; 
        
`

export const Content = styled.div`
      
   .coin{
  
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 30px;
     
   }

  .title{
    display: flex;
    justify-content: center;
  }
  .search{
    display:flex;
    justify-content: center;
    padding-top: 30px;

    input{
      width:600px;
      height:50px;
      text-align: center;
    }
  }
    
   p{
     color:white;
    

    }
  

    h1{
     color:white;
    
    }

    ul{
      
         width:400px;
         height:300px;
         display: flex;
         justify-content: center;
         background: #2a2e2c;
         list-style: none;
         border-radius: 10px;
     
     
    }

    li{
     
     
       flex-direction:column;
     
      
      
       img{
        width: 90px;
        height: 90px;
        
       }

       button{
        height:50px;
        width:300px;
        border-radius: 30px;
        background-color: #1599b0;
        font-weight: 600;
        
        transition: all 300ms ease;
        
       }

       button:hover{
         background:#21bede;

       }

       .footer-item{
         margin:8px 0;
         font-weight: lighter;
         padding-bottom: 1px;
       }

       .footer-item-btn{
          display: flex;
          justify-content: center;
          padding-top: 10px;
       }

       .footer-item-img{
        
         padding-top: 50px;
         padding-bottom: 10px;
         margin-bottom: 15px;
         display: flex;
         justify-content: center;
       
       }

 
    }


   

`

