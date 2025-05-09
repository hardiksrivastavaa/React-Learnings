export default function Message({ name, textColor }) {
  return (
    <h1>
      Hello Dear, <span style={{ color: textColor }}>{name}</span>
    </h1>
  );
}
