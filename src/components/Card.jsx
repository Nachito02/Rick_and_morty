import styled from '../styles/Card.module.css'


export default function Card(props) {


   return (
      <div className={styled.container}>
         
         <img  src={props.image} alt="" /> 
         <h2 className={styled.nombre}>{props.name}</h2>
        
        <div className={styled.info}>
        <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
        </div>

      </div>
   );
}
