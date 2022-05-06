export default function attackOptions(obj) {
  const { special } = obj;
  const objUpdate = [];

  special.forEach((item) => {
    const { description = 'Описание недоступно', ...data } = item;
    objUpdate.push({ ...data, description });
  });

  return objUpdate;
}
