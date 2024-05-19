export default function FancyBox({ text, styling, icon }) {
  return (
    <span
      className={`flex items-center justify-center bg-neutral-content px-6 py-1.5 rounded-xl ${styling}`}
    >
      {text}
      {icon}
    </span>
  );
}
