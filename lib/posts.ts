export interface Post {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
}

export const posts: Post[] = [
  {
    slug: 'building-biggest-book-sharing-community',
    tag: 'Vision',
    date: 'June 19, 2025',
    title: 'Librea — Building the Biggest Book-Sharing Community in the World',
    excerpt: 'Somewhere in your city, there\'s a copy of the exact book you\'re looking for. That gap is the entire reason Librea exists.',
    body: `Somewhere in your city, there's a copy of the exact book you're looking for. It's sitting on a shelf, already read, doing nothing — while a new copy gets printed, shipped, and sold just a few streets away. That gap is the entire reason Librea exists.

## The vision

Imagine a world where buying a new book is the exception, not the default. Where every neighborhood has an invisible network of readers passing books between each other — not through a store, not through a warehouse, just person to person. Where finding your next read means asking the people around you, not scrolling an algorithm.

That's the world Librea is built for.

## Why this matters more than convenience

This isn't just about saving a few euros or decluttering a shelf. Every book shared instead of bought new skips an entire chain of environmental cost — no new tree pulped, no new mill run, no new shipment across the country. Multiply that by thousands of readers in a city, millions across a country, and the math becomes serious. Reading doesn't have to come at the cost of a forest.

The goal isn't to ask people to read less. It's to make sure that the books we already have in circulation actually get read, again and again, instead of sitting closed on a shelf while new copies get printed to replace them.

## What that looks like in practice

Librea connects readers locally — so the book you're done with doesn't end up in storage, it ends up in someone else's hands a few blocks away. Book clubs bring people together around shared reads. Wishlists make it easy to signal what you're looking for, so the right book finds the right reader faster. None of it requires a new copy to be printed.

The bigger this network gets, the smaller the need for new printing becomes. That's the actual goal — not just a sharing app, but a meaningful dent in how many trees get cut down to keep up with reading demand.

## The dream, plainly

If enough of us share books through Librea instead of buying new, we genuinely reduce the need to print new copies at scale. That's not a marketing line — it's the entire reason this app exists. Every shared book is one less new one that has to be made.

This is just the beginning. Librea is currently in TestFlight, growing one shared book — and one fewer printed one — at a time.`,
    image: '/devoted-reading.jpg',
  },
  {
    slug: 'young-readers-reading-more',

    tag: 'Reading',
    date: 'June 19, 2025',
    title: 'Breaking: Young Readers Are Reading More Than Ever',
    excerpt: 'Forget the narrative that Gen Z has traded books for screens. The numbers tell a different story — and it\'s a good one.',
    body: `Germany's book industry posted a revenue increase in 2024, even as the total number of book buyers kept shrinking. That's not a contradiction. It's a signal: one group is buying more than ever, and it's not who you'd expect.

Readers aged 16 to 29 are now driving the growth. They make up nearly a third of all active book buyers in Germany, and they're the reason fiction, young adult titles, and audio formats are outperforming the rest of the market. While older, more "traditional" categories like guidebooks and travel books are declining, the segments young readers actually care about are climbing fast.

Fiction is winning, hard. Fiction grew over 4% in a single year and now makes up more than a third of the entire book market. Thrillers, romance, fantasy, and manga are leading the charge — genres with built-in communities and strong word-of-mouth, often sparked on platforms like TikTok.

Audio is exploding. Streaming audiobook revenue has grown by more than 225% since 2019. For a generation that grew up with podcasts and playlists, listening to a book isn't a compromise — it's just another natural way to read.

Backlist titles are thriving. More than half of all books sold today aren't new releases — they're older titles readers are discovering for the first time, often through recommendations rather than marketing campaigns. That points to something deeper than a passing trend: genuine, sustained interest in reading as a habit, not just a purchase.

The old assumption was that attention spans were shrinking and books were losing the fight against feeds. The data says otherwise. Young readers haven't given up on books — they've just changed how they find them, talk about them, and consume them. Recommendation-driven discovery, audio formats, and community-based reading are replacing the old top-down model of publishing.

If young readers are rediscovering books through community and recommendation rather than bookstore displays, the next logical step is making that discovery social and local. That's exactly what Librea is built for — a place to find your next read through the people around you, not an algorithm.`,
    image: '/pexels-pixabay-256431.jpg',
  },
  {
    slug: 'paper-industry-environment',
    tag: 'Sustainability',
    date: 'June 17, 2025',
    title: 'Exposed: How the Paper Industry Is Destroying the Environment',
    excerpt: 'Every book on your shelf has a hidden cost that never shows up on the price tag.',
    body: `Paper manufacturing is energy-intensive from start to finish — pulping, bleaching, drying, and pressing all run on heat and electricity, much of it still from fossil fuel sources. Add in global shipping: raw pulp moves from forest to mill, paper moves from mill to printer, finished books move from printer to warehouse to store to your door. Every step adds emissions before a single page is ever read.

Here are the three biggest environmental costs, ranked from bad to worse.

## 3. Carbon footprint of production and shipping

E-books and audiobooks aren't a clean escape either — manufacturing devices and running data centers carry their own carbon cost. But for physical books specifically, the supply chain is long, energy-heavy, and largely invisible to the reader.

## 2. Water and chemical pollution from pulp mills

Turning wood into paper requires enormous volumes of water and a cocktail of chemicals — chlorine compounds for bleaching, sulfates for breaking down wood fibers. Pulp mills are consistently among the largest industrial water users in any region they operate in, and wastewater discharge has a long history of contaminating local waterways.

This isn't a problem of the past. Mills operating today, including ones supplying major publishing markets, still face scrutiny over discharge practices and the long-term health of the rivers downstream.

## 1. Deforestation and habitat loss

This is the big one. Pulp and paper production remains one of the leading drivers of forest degradation worldwide. Even with sustainable forestry certifications becoming more common, the scale of global paper demand still pushes into older, more biodiverse forest systems — the kind that take decades or centuries to regenerate, if they regenerate at all.

Habitat loss from logging doesn't just affect trees. It cascades through entire ecosystems — displacing wildlife, degrading soil, and disrupting the carbon storage that forests provide for free, until they're gone.

## The lowest-impact book is the one you don't have to print

The single most effective way to reduce a book's environmental footprint isn't a greener pulping process or a better certification label — it's simply not printing a new copy at all. Every book that gets shared, passed on, or borrowed instead of bought new sidesteps this entire chain: no new tree, no new mill run, no new shipment.

That's the idea behind Librea — turning the books already sitting on shelves around you into the most sustainable supply chain there is.`,
    image: '/paper-mill.jpg',
  },
  {
    slug: 'how-to-run-a-book-club',
    tag: 'Community',
    date: 'June 14, 2025',
    title: 'How to Run a Book Club That Connects',
    excerpt: 'Most first attempts fizzle out after two or three meetings. Here\'s how to set yours up so it actually lasts.',
    body: `Starting a book club sounds simple: pick a book, invite some friends, talk about it. Most first attempts fizzle out after two or three meetings anyway. Here's how to set yours up so it actually lasts.

## Start smaller than you think

The instinct is to invite everyone you know. Resist it. A group of 5–8 people is the sweet spot — small enough that everyone can actually speak, large enough that you'll still have a good turnout even when a few people can't make it. You can always grow later once the rhythm is established.

## Pick a cadence and stick to it

Monthly works best for most beginner clubs — it gives people enough time to actually finish the book around work and life, without losing momentum between meetings. Pick a fixed day (like "first Saturday of the month") rather than re-scheduling every time. Consistency matters more than perfect timing.

## Choosing books without endless debate

Two simple systems work well for a new club:

- **Rotating picker** — each member takes a turn choosing the book. Removes decision fatigue and gives everyone a moment in the spotlight.
- **Shortlist + vote** — one person nominates 3 options, the group votes. Good for groups that want more say without endless debate.

Avoid open-ended "what should we read?" threads — they tend to stall out without a clear decision process.

## Facilitating the actual discussion

A few basics go a long way:

- **Start with an easy, opinion-based question** — not "what was the theme?" but "did you like the ending?" Easy entry points get quiet people talking.
- **Prepare 3–4 questions in advance**, but don't force your way through all of them. Let the conversation breathe.
- **Handle silence by waiting**, not filling it. A few seconds of quiet often means people are thinking, not checking out.
- **Gently redirect if one person dominates** — "That's a great point — what did everyone else think?" works without being confrontational.

## Keeping momentum between meetings

The biggest killer of book clubs isn't a bad discussion — it's the silence in between. A simple group chat to share thoughts mid-read, post a relevant article, or just confirm who's coming keeps the club alive between sessions.

## Make it easy on yourself

Running a club well doesn't require spreadsheets and reminder emails. A simple group chat, a shared note for the book list, and a reliable calendar invite are all you really need to keep things running smoothly.`,
    image: '/flee-market.jpg',
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
