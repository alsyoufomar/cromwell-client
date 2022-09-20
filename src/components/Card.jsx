import '../styles/card.css';

const Card = (props) => {
  console.log(props, 'props');
  return (
    <li className='card'>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        placeat, nulla officiis laborum dolorem deserunt, laboriosam aliquam
      </p>
    </li>
  );
};

export default Card;
