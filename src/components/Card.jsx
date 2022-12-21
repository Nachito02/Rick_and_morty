import styled from '../styles/Card.module.css'


export default function Card(props) {

   const {onClose} = props;

   return (
      <div className={styled.container}>
        <div className={styled.contenedor_butt}>
        <button onClick={ onClose} value={props.id} className={styled.button}>X</button>
        </div>
         <img  src={props.image} alt="" /> 
         <h2 className={styled.nombre}>{props.name}</h2>
        
        <div className={styled.info}>
        <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
        </div>

      </div>
   );
}
