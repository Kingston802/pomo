import './Items.css'

function Items(props) {
  const listItems = [];
  props.items.forEach(item => {
    listItems.push(<li>{ item }</li>);
  });

  return (
    <ul>
      <h2>Tasks</h2>
      { listItems }
    </ul>
  )
}

export default Items;