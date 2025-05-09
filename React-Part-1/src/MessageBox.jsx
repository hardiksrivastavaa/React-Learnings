export default function MessageBox({ name, textColor }) {
  return (
    <div>
      <h1>Hello Dear, <span style={{ color: textColor }}>{name}</span></h1>
    </div>
  );
}
