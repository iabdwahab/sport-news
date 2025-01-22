import sportNewsLogo from '/public/imgs/global/logo.svg';

function Logo() {
  return (
    <div>
      <a href="#">
        <img src={sportNewsLogo} alt="Sport News Logo" className="w-32" />
      </a>
    </div>
  );
}
export default Logo;
