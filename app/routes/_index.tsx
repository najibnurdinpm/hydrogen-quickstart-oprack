
import {LoaderArgs} from '@remix-run/cloudflare';
import {
  useLoaderData,
} from '@remix-run/react';

const LAYOUT_QUERY = `#graphql
query layout {
  shop {
    name
    description
  }
}
`;

export async function loader({context}: LoaderArgs) {

  const {storefront} = await context.cloudflare;

  if (!storefront) return null

  const layout = await storefront.query(LAYOUT_QUERY)

  return layout.shop;
}

export default function Homepage() {

  const data = useLoaderData<typeof loader>();

  return (
    <div className="home">
      {!data ? ('loader sedang proses') : (data.name)}
      
    </div>
  );
}