export default function AmazonCardPrice({ newprice, oldprice }) {
  return (
    <>
      <h3>{newprice}</h3>
      <h3 style={{ textDecoration: "line-through" }}>{oldprice}</h3>
    </>
  );
}
