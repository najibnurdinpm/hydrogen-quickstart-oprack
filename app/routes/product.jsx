export async function loader({context}) {

    console.log('context product', context)

    return {}
}

export default function Product() {
    return (
      <div className="home">
        Ini product
      </div>
    );
  }