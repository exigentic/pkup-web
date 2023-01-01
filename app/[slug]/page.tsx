import supabase from '#/utils/supabase'
import { notFound } from 'next/navigation'
export const revalidate = 60

export async function generateStaticParams() {
  // const supabase = await SupabaseServerClient();
  console.log("loading slugs...");
  const { data: parties } = await supabase.from('party').select('slug')

  return parties?.map(({ slug }) => ({
    slug,
  }))
}

export default async function Page( { params: { slug } }: { params: { slug: string } }) {
  //const session = await unstable_getServerSession()
  //const supabase = await SupabaseServerClient(session!);
  const { data: party } = await supabase.from('party').select("*").eq('slug', slug).single()

  if (!party) {
    notFound()
  }


  return <pre>{JSON.stringify(party, null, 2)}</pre>
  //return <pre>{JSON.stringify(session, null, 2)}</pre>
}