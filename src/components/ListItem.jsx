
const ListItem = ({producto}) => {
  const {name, description, price} = producto;
    return (
    <div>
    <h3>Nombre del producto: {name}</h3>
    <h5>Precio: {price}</h5>
    <p>Descripcion: {description}</p>
    </div>
  )
}

export default ListItem




