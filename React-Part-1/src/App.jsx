import "./App.css";
import MessageBox from "./MessageBox";
import ProductGroup from "./ProductGroup";

export default function App() {
  return (
    <>
      <ProductGroup />
      <MessageBox name="Hardik Srivastava" textColor="red" />
      <MessageBox name="Vaishali Srivastava" textColor="yellow" />
      <MessageBox name="Rama Srivastava" textColor="blue" />
      <MessageBox name="Shirshak Srivastava" textColor="green" />
    </>
  );
}
