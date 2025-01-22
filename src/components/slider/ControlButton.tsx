type propsType = {
  imgURL: string;
  onClick: VoidFunction;
  disabled: boolean;
};

function ControlButton({ imgURL, onClick, disabled }: propsType) {
  return (
    <button onClick={onClick} disabled={disabled} className={`${disabled ? 'bg-gray' : 'bg-black'} block py-4 px-5`}>
      <img src={imgURL} alt="Right Arrow" />
    </button>
  );
}
export default ControlButton;
