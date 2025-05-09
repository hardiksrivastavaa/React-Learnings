export default function Button() {
  function handleDblClick() {
    console.log("Button Double Clicked!!");
  }
  function handleOnClick() {
    console.log("Button Clicked!!");
  }

  return (
    <>
      <button onDoubleClick={handleDblClick}>Click Me!</button>

      <p onClick={handleOnClick}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        architecto asperiores nihil odit praesentium? Magnam aut harum, expedita
        minima similique quos eveniet esse sunt consectetur asperiores deserunt
        earum inventore alias. Excepturi officiis dicta eligendi inventore
        laborum doloremque, magni quas. Ducimus mollitia inventore suscipit
        aperiam ipsum quod illo, sed similique rem.
      </p>
    </>
  );
}
