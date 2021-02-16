import './Items.css'

function Items(props) {
  const listItems = [];
  props.items.forEach(item => {
    listItems.push(<li>{ item }</li>);
  });

  return (
    <ul>
      <h2>Tasks</h2>
      <input className="task"></input>
      <button onClick={() => {props.setItems([...props.items, document.querySelector('.task').value])}}>Add</button>
      { listItems }
    </ul>
  )
}

export default Items;