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

  function handleButtonClick() {
    // add value of input to list
    const text = document.querySelector('.task').value;
    const el = <li key={ text } onClick={handleItemClick}>{ text }</li>;
    props.setItems([...props.items, el]);

    // clear input 
    document.querySelector('.task').value = '';
  }

  const listItems = [...props.items];

  return (
    <ul>
      <div className="TaskInput">
        <input className="task" onKeyDown={(event) => { if (event.key === 'Enter') {handleButtonClick()} } }></input>
        <button onClick={handleButtonClick}>➕</button>
      </div>
      { listItems.length > 0 ? listItems : (<p>Add some items!</p>) }
    </ul>
  )
}

export default Items;