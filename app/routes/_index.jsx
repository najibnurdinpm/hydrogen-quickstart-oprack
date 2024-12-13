
import {CollectionConnection} from '@shopify/hydrogen/dist/storefront-api-types';
import {LoaderArgs} from '@remix-run/cloudflare';
import {
  useLoaderData,
} from '@remix-run/react';

export async function loader({
  context,
}: LoaderArgs) {
  return 'hasil inidex';
}

export default function Homepage() {

  const data = useLoaderData<typeof loader>();

  return (
    <div className="home">
      {data}
    </div>
  );
}