import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "@/components/PageContent";



export default async function Home() {
  // const songs = await getSongs();
  return (
    <div className="bg-neutral-900 rounded-lg h-full overflow-hidden overflow-y-auto mr-1">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/liked.png"
              name="liked songs"
              href="/"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            New Songs
          </h1>
        </div>
        <PageContent songs={ []} />
      </div>
    </div>
  );
}
