import './Items.css'


function Items(props) {

  function handleItemClick(c) {
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

  function handleButtonClick(c) {
    // add value of input to list
    const text = document.querySelector('.task').value;
    const el = <li key={ text } onClick={handleItemClick}>{ text }</li>;
    props.setItems([...props.items, el]);
  }

  const listItems = [...props.items];

  return (
    <ul>
      <h2>Tasks</h2>
      <input className="task"></input>
      <button onClick={handleButtonClick}>Add</button>
      { listItems.length > 0 ? listItems : (<p>Add some items!</p>) }
    </ul>
  )
}

export default Items;