import supabase from '#/utils/supabase';
import Link from 'next/link';

export default async function Page() {
  const { data: parties } = await supabase.from('party').select();

  return (
    <div>
      <h1>Welcome to PKUP</h1>
      { parties?.map((party) => (
          <li key={party.id}>
            <Link href={`/${party.slug}`}>{party.name}</Link>
          </li>
      ))
      }
    </div>
    );
}