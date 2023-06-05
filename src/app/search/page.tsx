import getSongsByTitle from '@/actions/getSongsByTitle';
import React from 'react'

interface pageProps {
   searchParams: {
    title: string; 
   }
}

const page = async ({searchParams}: pageProps) => {
  const songs = await getSongsByTitle(searchParams.title);
  return (
    <div>
      search page
    </div>
  )
}

export default page