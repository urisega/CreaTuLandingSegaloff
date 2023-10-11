import ListItem from './ListItem'
const ListItemContainer = ({productos}) => {
  
    return (
    <div>
        {productos.map(producto => <ListItem key = 
        {producto.id} producto ={producto} />)}
    </div>
  )
}

export default ListItemContainer