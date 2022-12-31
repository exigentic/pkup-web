import supabase from '#/utils/supabase'
import { notFound } from 'next/navigation'
import { unstable_getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 0

export async function getData() {
  const { data: parties } = await supabase.from('party').select('slug')

  return parties?.map(({ slug }) => ({
    slug,
  }))
}

export default async function Page( { params: { slug } }: { params: { slug: string } }) {
  const { data: party } = await supabase.from('party').select("*").eq('slug', slug).single()

  if (!party) {
    notFound()
  }

  return <pre>{JSON.stringify(party, null, 2)}</pre>
}