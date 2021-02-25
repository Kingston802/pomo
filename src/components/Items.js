import './Items.css'

function Items(props) {

  function handleItemClick(c) {
    const newArray = [...props.items];
    // find and remove clicked value (checking it exists)
    const index = newArray.indexOf(c.target.textContent);
    if (index > -1) {
      newArray.splice(index, 1);
    }
    props.setItems(newArray);
  }

  function handleButtonClick() {
    // add value of input to list
    const text = document.querySelector('.task').value;
    props.setItems([...props.items, text]);

    // clear input 
    document.querySelector('.task').value = '';
  }

  return (
    <ul className="Items">
      <div className="TaskInput">
        <input className="task" onKeyDown={(event) => { if (event.key === 'Enter') {handleButtonClick()} } }></input>
        <button onClick={handleButtonClick}>➕</button>
      </div>
      { props.items.length > 0 ? props.items.map((li, i) => <li key={ i } onClick={handleItemClick}>{ li }</li>) : (<p>Add some items!</p>) }
    </ul>
  )
}

export default Items;