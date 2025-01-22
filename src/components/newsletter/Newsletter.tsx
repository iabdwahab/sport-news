import Container from '../Container';
import hero from '/public/imgs/newsletter/hero-1.png';
import arrow from '/public/imgs/newsletter/arrow.svg';
import vector from '/public/imgs/newsletter/vector.svg';

function Newsletter() {
  return (
    <section>
      <Container className="grid md:grid-cols-2 gap-10 bg-placeholder md:px-8 pt-4">
        <div className="grid content-center gap-4">
          <h2 className="gradient-text max-md:text-center uppercase font-black text-3xl md:text-5xl lg:text-7xl">
            NEWSLETTER <br /> SUBSCRIBTION
          </h2>
          <div className="grid grid-rows-[50px,50px] md:grid-rows-[50px] md:grid-cols-[1fr,100px] max-md:gap-2 rounded-md overflow-hidden">
            <input type="text" placeholder="example@gmail.com" className="px-4 rounded-md md:rounded-e-none border md:border-r-0 outline-none" />
            <button className="bg-black flex justify-center items-center max-md:rounded-md">
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="flex justify-center bg-no-repeat " style={{ backgroundImage: `url('${vector}')` }}>
          <img src={hero} alt="Player" />
        </div>
      </Container>
    </section>
  );
}
export default Newsletter;
