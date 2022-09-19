import '../styles/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__hero'>
        <h1>Welcome, Omar!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa
          accusantium quidem. Quod numquam voluptas quas labore soluta.
          Veritatis, assumenda. Eaque eum aut molestias eos aliquid est natus
          obcaecati quod?
        </p>
      </div>
      <div className='home__fake-content'>
        <h2>What our partners have to say:</h2>
        <div className='home__fake-content__details'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa
            accusantium quidem. Quod numquam voluptas quas labore soluta.
            Veritatis, assumenda. Eaque eum aut molestias eos aliquid est natus
            obcaecati quod?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officia
            suscipit, obcaecati, vero a amet sit commodi voluptatem aut et neque
            laudantium ex blanditiis ipsum sapiente architecto quasi eos
            tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            laboriosam blanditiis illo error, quibusdam labore est corrupti
            consectetur laudantium, officia eum! Harum aperiam cumque vitae iure
            nisi qui similique aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
