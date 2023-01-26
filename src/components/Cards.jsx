import Card from "./Card";
export default function Cards(props) {

   

   const { characters, onClose } = props;


   return characters.map((e,i) => (
       <Card key={i} id={e.id} characters={characters} name={e.name} species={e.species} gender={e.gender} image={e.image} onClose={onClose} /> 
   )) 
}
