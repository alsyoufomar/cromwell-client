import Card from './Card';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__hero'>
        <h1>
          Hello, Omar!
          <br />
          Welcome to Oioi
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa
          accusantium quidem. Quod numquam voluptas quas labore soluta.
          Veritatis, assumenda. Eaque eum aut molestias eos aliquid est natus
          obcaecati quod?
        </p>
      </div>
      <div className='home__fake-content'>
        <h2>What our partners have to say:</h2>
        <div className='home__fake-content__customer-review'>
          <p>
            <span>"</span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa
            accusantium quidem. Quod numquam voluptas quas labore soluta.
            Veritatis, assumenda. Eaque eum aut molestias eos aliquid est natus
            obcaecati quod?<span>"</span>
          </p>
          <p>
            <span>"</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officia
            suscipit, obcaecati, vero a amet sit commodi voluptatem aut et neque
            laudantium ex blanditiis ipsum sapiente architecto quasi eos
            tenetur.<span>"</span>
          </p>
          <p>
            <span>"</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            laboriosam blanditiis illo error, quibusdam labore est corrupti
            consectetur laudantium, officia eum! Harum aperiam cumque vitae iure
            nisi qui similique aspernatur!<span>"</span>
          </p>
        </div>
        <div className='home__fake-content__advertise'>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            placeat, nulla officiis laborum dolorem deserunt, laboriosam aliquam
            suscipit a maiores accusamus, dignissimos ea necessitatibus
            voluptatum porro fugit in aliquid unde?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nobis laboriosam blanditiis illo
            error, quibusdam labore est corrupti consectetur laudantium, officia
            eum! Harum aperiam cumque vitae iure nisi qui similique aspernatur!
          </p>
          <button className='submit'>Get in touch</button>
        </div>
        <div className='home__fake-content__service'>
          <h2>Our Services</h2>
          <ul className='home__service__cards'>
            <Card img='./card-1.jpg' title='Service 1' />
            <Card img='./card-2.jpg' title='Service 2' />
            <Card img='./card-3.jpg' title='Service 3' />
          </ul>
          <button className='submit'>
            Contact us now to see how we can best help you!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
