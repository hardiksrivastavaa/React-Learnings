import AmazonCardPrice from "./AmazonCardPrice";

export default function AmazonCard({ title, idx }) {
  let oldprice = [12495, 11900, 1599, 599];
  let newprice = [8999, 9199, 899, 278];
  let description = [
    "One of the best Product of Amazon",
    "Two of the best Product of Amazon",
    "Three of the best Product of Amazon",
    "Four of the best Product of Amazon",
  ];

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description[idx]}</p>
      <AmazonCardPrice newprice={newprice[idx]} oldprice={oldprice[idx]} />
    </div>
  );
}
