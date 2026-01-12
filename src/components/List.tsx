type ListProps = {
  items: string[];
};

export function List({ items }: ListProps) {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
}
