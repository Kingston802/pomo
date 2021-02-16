import './Items.css'


function Items(props) {

  function handleClick(c) {
    console.log(c);
    const newArray = [...props.items];
    // find and remove clicked value (checking it exists)
    const index = newArray.indexOf(c.target.textContent);
    if (index > -1) {
      newArray.splice(index, 1);
    }
    console.log(newArray);
    props.setItems(newArray);
  }

  const listItems = [];
  props.items.forEach(item => {
    listItems.push(<li key={ item } onClick={handleClick}>{ item }</li>);
  });

  return (
    <ul>
      <h2>Tasks</h2>
      <input className="task"></input>
      <button onClick={() => {props.setItems([...props.items, document.querySelector('.task').value])}}>Add</button>
      { listItems.length > 0 ? listItems : (<p>Add some items!</p>) }
    </ul>
  )
}

export default Items;