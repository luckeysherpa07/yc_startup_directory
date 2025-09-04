import Image from "next/image"
import SearchForm from "../../components/SearchForm"
import StartupCard from "@/components/StartupCard"

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query

    const posts = [
        {
            _createdAt: new Date(),
            views: 55,
            author: {
                _id: 1,
                name: "Luckey",
            },
            _id: 1,
            description: "This is a description",
            image: "https://static.vecteezy.com/system/resources/previews/009/171/100/non_2x/demo-symbol-concept-words-demo-on-wooden-blocks-photo.jpg",
            category: "Robots",
            title: "We Robots",
        },
    ]
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br /> Connect With Entrepreneurs
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                </p>

                <SearchForm query={query} />
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : "All Startups"}
                </p>
                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupCardType, index: number) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No Startups found</p>
                    )}
                </ul>
            </section>
        </>
    )
}
