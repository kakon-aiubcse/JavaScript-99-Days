// export async function getServerSideProps(context) {
//     const { id } = context.params;
  
//     return { props: { id } }; 
//   }
  
//   function ProductPage({ id }) {
//     return <div>Your searched product ID is: {id}</div>;
//   }
  
//   export default ProductPage;
  
import { useRouter } from 'next/router';

function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic ID directly

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Your searched product ID is: {id}</div>
    </>
  );
}

export default ProductPage;
