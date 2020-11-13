interface IFilterObj extends Object {
  [key: string]: any;
}

export default function filterByValue(array: IFilterObj[], string: string) {
  return array.filter((o) =>
    Object.keys(o).some((k) =>
      o[k].toLowerCase().includes(string.toLowerCase())
    )
  );
}
