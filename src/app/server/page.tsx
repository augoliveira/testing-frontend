const getProducts = () =>
  new Promise(() => {
    setTimeout(() => {
      return {
        products: [
          {
            id: 1,
            name: 'product 01'
          }
        ]
      };
    }, 2000);
  });

export default async function ServerPage() {
  const products = await getProducts();

  console.log(products);

  return (
    <>
      <h2>Server Component</h2>
    </>
  );
}
