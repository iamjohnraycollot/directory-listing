import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartUpCard";

export default async function Home({searchParams}: {searchParams: Promise<{query: string}>}) {

  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: 'Test Author'
    },
    _id: 1,
    description: 'This is a description',
    image: 'https://unsplash.com/photos/person-holding-red-tomatoes-kyvuAx-kEDI',
    category: "Plants",
    title: "We are Plants"
  }];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br/> Connect with  Entrepreneurs </h1>
        <p className="sub-heading !max-w-3xl">
          Sumbit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibord">
          {query ? `Search result for: ${query}` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>

      </section>
      
    </>
  );
}
