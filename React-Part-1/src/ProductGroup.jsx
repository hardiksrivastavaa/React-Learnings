import Product from "./Product";

export default function ProductGroup() {
  let option = ["hardik", "nikhil", "virat"];
  return (
    <>
      <Product title="Laptop" description="Laptop is Lenevo" price={40000} />
      <Product title="Tablet" description="Tablet is Lenevo" price={100000} />
      <Product title="Tablet" description="Tablet is Lenevo" price={100000} features={option} />
    </>
  );
}
