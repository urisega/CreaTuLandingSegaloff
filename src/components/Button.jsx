
const Button = ({col, textsize, callback, children}) => {
  return (
    <>
    <button style={{backgroundColor:col, fontSize: textsize}} onClick={callback}>{children}</button>
    </>
  )
}

export default Button