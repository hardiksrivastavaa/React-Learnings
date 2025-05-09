export default function Product({
  title = "hardik",
  description,
  price,
  features,
}) {
  return (
    <div
      className="card"
      style={{ backgroundColor: price <= 50000 ? "yellow" : "greenyellow" }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <h5>{price}</h5>

      {features && (
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      {price <= 50000 ? <p>Discount 5%</p> : null}
      {price >= 100000 && <p>Discount 10%</p>}
    </div>
  );
}
