const Button = ({
  lbl = 'default',
  style,
  handleClick,
  type = '',
  ...extras
}) => (
  <button
    style={style}
    onClick={handleClick}
    type={type}
    disabled={extras.disabled}
    className={`${extras.disabled && 'disableBtn'}`}
  >
    {lbl}
  </button>
);

export default Button;
