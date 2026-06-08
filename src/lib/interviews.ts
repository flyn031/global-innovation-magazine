import { supabase } from "./supabase";

export interface Interview {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  date: string;
  read_time: string;
  photo: string | null;
  subheadline: string;
  descriptor: string;
  intro: string;
  insights: string[];
  pull_quote: string;
  tags: string[];
  seo_description?: string;
  issue?: string;
  archive?: boolean;
  published?: boolean;
}

export async function getAllInterviews(): Promise<Interview[]> {
  const { data, error } = await supabase
    .from("interviews")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching interviews:", error);
    return FALLBACK_INTERVIEWS;
  }
  return data?.length ? data : FALLBACK_INTERVIEWS;
}

export async function getInterview(id: string): Promise<Interview | null> {
  const { data, error } = await supabase
    .from("interviews")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return FALLBACK_INTERVIEWS.find((i) => i.id === id) || null;
  }
  return data;
}

export async function getAllInterviewIds(): Promise<string[]> {
  const { data } = await supabase
    .from("interviews")
    .select("id")
    .eq("published", true);

  const dbIds = data?.map((r) => r.id) || [];
  const fallbackIds = FALLBACK_INTERVIEWS.map((i) => i.id);
  return [...new Set([...dbIds, ...fallbackIds])];
}

// Fallback interviews — used if DB is empty or unreachable
export const FALLBACK_INTERVIEWS: Interview[] = [
  {
    id: "sam-pitroda",
    name: "Sam Pitroda",
    role: "Inventor, Entrepreneur & Advisor to the Indian Prime Minister on Innovation",
    company: "C-Sam / Indian Government",
    category: "Deep Tech",
    date: "March 2014",
    read_time: "8 min read",
    photo: "/images/sam-pitroda.png",
    subheadline: "On engineering, poverty, the second telecoms revolution, and why this generational shift is bigger than World War II.",
    descriptor: "India\u2019s godfather of innovation",
    issue: "Issue 1, March 2014",
    archive: true,
    published: true,
    intro: "Sam Pitroda is often cited as the man who revolutionised India\u2019s telecoms industry. He is the Indian Prime Minister\u2019s advisor on innovation, holds more than 100 patents, and runs several businesses including C-Sam. James O\u2019Flynn interviewed Sam from his office in Chicago.",
    insights: [
      "I\u2019m still an engineer in my heart, because I see things as systems \u2014 input, output, delay, response, efficiency and productivity. I also integrate this to include social systems: how does my work affect people? Poor people, young people. Engineering systems are incredibly handy when dealing with social systems.",
      "I\u2019m from a very poor family. My father had a fourth grade education, the family had no money, I borrowed money to travel out of India. I realised that in the beginning making money was important. The tough task is to stop at that point and focus on something else.",
      "I came to the US to get a PhD in physics. Then my professor told me it takes seven years. I had a girlfriend, and I was young and stupid, so I said, \u2018I\u2019m not going to spend seven years getting a degree!\u2019 Life just takes turns and you never know what will be delivered to you.",
      "A lot of my patents are system patents. My first one was on tone generation \u2014 how do you generate analogue tones using digital memory? Then conference calling, digital conference calls. And now I have a series of patents on digital mobile wallets.",
      "We are going through a major generational revolution. I have been saying that this is a bigger event than World War II. This is destruction of a different type. The first telecoms revolution was about connecting people to talk. Now it is all about democratisation of information \u2014 that\u2019s the next revolution.",
      "We need to reduce cost and improve access to food, education, health and energy. The problems of the poor really don\u2019t get the talent to solve them that they deserve.",
      "We have to learn to change our developmental model. The model currently is more cars, more homes, more, more, more. That model can\u2019t work for ten billion people. We have to think about new models, based upon happiness.",
      "I don\u2019t care about titles. So you win a Nobel Prize, big deal. It\u2019s all fake \u2014 a plaque, a statue, it doesn\u2019t really mean anything. It\u2019s a journey that has to end at some point in time, so enjoy the journey and love people in the process.",
      "If I slow down I die. I would rather be busy, but I enjoy life and have no stress. Never retire! Always do something, teach kids, help others, but don\u2019t give up.",
      "Gandhi is my hero and his is the model we need. Am I a problem? Or am I a solution? I think people need to search their souls."
    ],
    pull_quote: "We are going through a major generational revolution. I have been saying that this is a bigger event than World War II. This is destruction of a different type.",
    tags: ["India", "Telecoms", "Innovation", "Engineering", "Patents"],
    seo_description: "Sam Pitroda on engineering, poverty, India\u2019s telecoms revolution, and why the generational shift we\u2019re living through is bigger than World War II.",
  },
  {
    id: "will-butler-adams",
    name: "Will Butler-Adams",
    role: "Managing Director",
    company: "Brompton Bicycle",
    category: "Product & Design",
    date: "March 2014",
    read_time: "7 min read",
    photo: "/images/brompton.png",
    subheadline: "On fate, folding bikes, proving yourself, and why the best thing you can do for young people is give them responsibility.",
    descriptor: "managing director of Brompton Bicycle",
    issue: "Issue 1, March 2014",
    archive: true,
    published: true,
    intro: "Will Butler-Adams runs Brompton Bicycle, one of the world\u2019s leading manufacturers of folding bikes. All Brompton bicycles are built in their factory in West London, one of only two frame manufacturers still based in the UK. Today Brompton bicycles are sold in 42 countries.",
    insights: [
      "There is more for me to do and in many respects this is driven by a desire to prove myself. Academia was never my strong point. Up until the age of 13 life for me was not about learning but having fun. I was in the \u2018fick\u2019 classes. I suppose I am still shaking that off.",
      "It is Andrew Ritchie, inventor of the Brompton Bike, we can thank for creating the Brompton. What I have done is taken his baby and helped her grow up. I recognised what skills the business needed, recruited the right people with those skills and gave them the space to do their job.",
      "Many years ago I took a ride on a bus and got talking to the man next to me who was the chairman of Brompton Bicycle, Tim Guinness. He was looking for someone just like me. I put my plans for an MBA on hold and grasped the opportunity. Meeting Tim Guinness was extreme fate.",
      "My first project for ICI was to redesign an agitator bearing housing. It was the most expensive, over engineered and nearly not on time solution to the problem. It was then that I realised I was not being paid to do the work but to deliver the project on time, on budget and fit for purpose.",
      "In my case I think innovation is a generous term. All that I did was do what others have done before me. The trick is to recognise this and go and find the information and the things not to do and apply them to your business.",
      "We make damn good bikes that add value to your life\u2026it is cool!",
      "Give young people responsibility mentally and commercially to prove what they are capable of. Be there to offer support but not to judge and encourage them to take risks.",
      "Do not be afraid to take risks and be confident enough not to follow the crowd.",
      "Do you ever take time to reflect on where you are, to sit back and enjoy? I\u2019m not there yet."
    ],
    pull_quote: "We make damn good bikes that add value to your life\u2026it is cool!",
    tags: ["Manufacturing", "Product Design", "Cycling", "UK Business", "Leadership"],
    seo_description: "Will Butler-Adams of Brompton Bicycle on fate, folding bikes, proving yourself, and why good innovators don\u2019t follow the crowd.",
  },
  {
    id: "boyan-slat",
    name: "Boyan Slat",
    role: "Founder & CEO",
    company: "The Ocean Cleanup",
    category: "Climate & Sustainability",
    date: "September 2014",
    read_time: "8 min read",
    photo: "/images/ocean-cleanup.png",
    subheadline: "On finding more plastic than fish, dropping out of university, and why the only appropriate response to criticism is a 530-page feasibility report.",
    descriptor: "founder of The Ocean Cleanup",
    issue: "Issue 2, September 2014",
    archive: true,
    published: true,
    intro: "Boyan Slat came to the world\u2019s attention overnight when his TED talk went viral. He was 18 years old at the time, and claimed to have developed a solution to collecting the millions of pieces of plastic in the world\u2019s oceans. James O\u2019Flynn spoke to Boyan from the Netherlands.",
    insights: [
      "I have always been interested in engineering and technology, I have always entertained myself thinking about solving problems. I was 16 years old and it struck me that I was coming across more plastic in the ocean than fish. These types of problems are the major challenges of our generation.",
      "I was a geek growing up, I still am. I have always thought about things a little differently. Teachers would always complain, saying I would never stick to an assignment.",
      "I was in the Azores, in a restaurant on the terrace and came up with the idea of harnessing the ocean\u2019s power to collect the plastic. Hey presto.",
      "I couldn\u2019t stop thinking of the project. I decided to put my studies on hold, as well as socialising. I put everything into it, gave myself half a year and put all my 300 pocket money euros into it.",
      "Originally only two people offered help, but after the TED talk went viral I was getting about 1,500 emails a day. This enabled the crowd-funding and team to be assembled which grew to 100 people.",
      "I wasn\u2019t surprised at the criticism. Suddenly an 18 year old says he can clean the ocean. I understand. The only appropriate response would be a 530-page feasibility report that shows it is actually feasible. We have now published the report.",
      "We have proven that the plastic can be turned into oil \u2014 three independent companies have confirmed this. The quality is much better than expected.",
      "There are no islands of plastic as some people think. It\u2019s very dispersed. The scale is huge though. 95 per cent of the plastic is quite large \u2014 all the way up to parts of boats, jerry cans, nets.",
      "All entrepreneurs want to be in a position of going from controlling it all, to where it controls itself somewhat. Personally I really like being involved in the engineering process."
    ],
    pull_quote: "The only appropriate response to criticism would be a 530-page feasibility report that shows it is actually feasible. We have now published the report.",
    tags: ["Ocean Cleanup", "Climate", "Engineering", "Startups", "Sustainability"],
    seo_description: "Boyan Slat of The Ocean Cleanup on finding more plastic than fish, going viral at 18, and building a team to clean the world\u2019s oceans.",
  },
  {
    id: "sultan-ahmed-bin-sulayem",
    name: "Sultan Ahmed Bin Sulayem",
    role: "Group Chairman & CEO",
    company: "DP World",
    category: "Enterprise Innovation",
    date: "May 2016",
    read_time: "9 min read",
    photo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop",
    subheadline: "On Dubai\u2019s founding vision, building free zones from nothing, and why listening is an amazing art.",
    descriptor: "group chairman and CEO of DP World",
    issue: "Dubai Special, May 2016",
    archive: true,
    published: true,
    intro: "Sultan Ahmed Bin Sulayem is Group Chairman and Chief Executive Officer of DP World and Chairman of Ports, Customs and Free Zone Corporation. Global Innovation Magazine Founder James O\u2019Flynn travelled to Dubai to interview His Excellency.",
    insights: [
      "The first time I ever heard the word \u2018innovation\u2019 was in 1987 from His Highness Sheikh Mohammed bin Rashid during a Ramadan gathering. He said: \u2018I need people with vision and innovation to be part of my team. These are going to be the leaders of tomorrow.\u2019",
      "His Highness answered smilingly: \u2018I meant that all of you must change your pattern of thinking towards positivity, you must break away from defeatist thinking, and you should accept that there is no such thing as a deadlock. My team has no room for whoever can\u2019t behave like this.\u2019",
      "Dubai is a small place; if we didn\u2019t opt to go vertically then our children would never see nature, as the whole place would have been covered. When I talk about Dubai and what I did, you can characterise it in blocks of ten years.",
      "I was involved with the free zone, the Jebel Ali free zone, which I started in 1985, and DP World in the 1990s. A lot of things that have happened in Dubai evolved from necessity, and necessity is the mother of invention.",
      "Through customs, ports, airports and free zones, we process about 18\u201319 million documents a year. His Highness Sheikh Mohammed wanted to establish an electronic Government. He managed by example.",
      "Innovation has come from within the organisation, rather than from the top. In airport customs, they come up with amazing initiatives out of necessity \u2014 not because we were pushing them, but because they found a way that takes them less time to do their job with precision.",
      "The way I lead is that I want people to challenge ideas and talk to me without hesitation. I like to hear other opinions. What happens then is that ideas can be refined and adapted to find another way.",
      "When I have an idea I try to convince people. As a boss, you can always just tell people to do things, but if it fails they will just say, \u2018I wasn\u2019t convinced.\u2019 When a person is as passionate as you are, they will achieve the goal.",
      "Much of our success comes from our employees, and our customers. When you listen, you learn so much. Sometimes people want to talk, they want to hear themselves talking, and they miss so much. Listening is an amazing art."
    ],
    pull_quote: "You must break away from defeatist thinking, and you should accept that there is no such thing as a deadlock.",
    tags: ["Dubai", "Ports & Trade", "Government Innovation", "Leadership", "Free Zones"],
    seo_description: "Sultan Ahmed Bin Sulayem of DP World on Dubai\u2019s innovation journey, building free zones from nothing, and why listening is the most underrated leadership skill.",
  },
  {
    id: "david-horton",
    name: "David Horton",
    role: "Head of Innovation",
    company: "Synechron",
    category: "Fintech",
    date: "May 2016",
    read_time: "7 min read",
    photo: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&h=500&fit=crop",
    subheadline: "On growing up between continents, digital banking\u2019s next frontier, and why being observant matters more than being clever.",
    descriptor: "head of innovation at Synechron",
    issue: "Dubai Special, May 2016",
    archive: true,
    published: true,
    intro: "Synechron is a fast growing digital, business consulting and technology services provider based in New York, but with a global reach, including a base in Dubai. David Horton is their Head of Innovation, working at the cutting edge of banking and finance.",
    insights: [
      "I am one of those people who is a bit of a traveller; my parents moved around the world. I was born in Zimbabwe, and moved to South Africa when I was very young. I finished school and university then moved back to London where I worked for several years, before moving back to the Middle East.",
      "My background is really on the technology side of things \u2014 IT. Starting from being the guy you rang up on the helpdesk who helps everyone out. I did some training and teaching, showing people how to use computers, but in a very human way. I always think this helped me in many ways.",
      "When you speak with business users about innovation or technology, they want you to put things in business terms. Ninety per cent of what I do is around explaining technology in terms of how it will benefit businesses if they decide to invest in it.",
      "When you show people a place that is real, tangible and concrete it becomes an easy sell. It is not a presentation \u2014 people can experience and feel the new customer journey for themselves.",
      "We have integrated \u2018beacons\u2019 into the Centre which demonstrate the potential for bank loyalty schemes. As customers walk past a particular point they get tailored \u2018beacon\u2019 alerts on their phone.",
      "Over the last few years there has been a convergence of innovation and it is really opening up doors to do things that were just not possible a few years ago. Blockchain, although in its early stages, is another area that is definitely going to cause some disruption.",
      "The one thing that social media does is it allows you to follow and keep in touch with thought leaders. LinkedIn is also a valuable place to learn.",
      "Just be observant. Kids do things so differently, so watching them and looking at where they are shining their lights is also valuable. I have a great team with a big imagination, so we often sit together and discuss opportunities and build prototypes."
    ],
    pull_quote: "When you show people a place that is real, tangible and concrete it becomes an easy sell. It is not a presentation \u2014 people can experience the new customer journey for themselves.",
    tags: ["Fintech", "Digital Banking", "Innovation", "Dubai", "Consulting"],
    seo_description: "David Horton of Synechron on digital banking innovation, the convergence of new technologies, and why being observant is more valuable than being clever.",
  },
  {
    id: "katherine-manuel-gautam-jain",
    name: "Katherine Manuel & Gautam Jain",
    role: "SVP Innovation & Head of Strategic Planning, MENA",
    company: "Thomson Reuters",
    category: "Enterprise Innovation",
    date: "May 2016",
    read_time: "8 min read",
    photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop",
    subheadline: "On innovating inside a 50,000-person company, why culture change has to come from the top, and the books that shaped their thinking.",
    descriptor: "innovation leaders at Thomson Reuters",
    issue: "Dubai Special, May 2016",
    archive: true,
    published: true,
    intro: "Thomson Reuters is a multinational media, information and technology company operating in more than 100 countries, with over 50,000 people. Global Innovation Magazine spoke to Katherine Manuel and Gautam Jain about embedding a culture of innovation across the organisation.",
    insights: [
      "Katherine: I ended up running the technology strategy area. After a few years I wanted to try something different. When Jim Smith became CEO I came back to work in the office of the CEO as a Vice President of Strategy. After some time working on the transformation programme I was asked to head up innovation.",
      "Gautam: I grew up in a small town near Mumbai, India. I studied computer technology, then joined the country\u2019s largest IT consulting firm. I then pursued my MBA in Finance from Mumbai University and joined the Business Graduate Programme at Thomson Reuters.",
      "Katherine: Innovation definitely needed to come from the top, from our CEO. One of the key messages was that we are changing and we are not going back. So this is not a phase, it is reality.",
      "The MENA Innovation Lab was inaugurated in July 2015 by HH Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum. The purpose of the lab is to foster a culture of innovation in MENA.",
      "Katherine: Identify innovation change agents \u2014 people who can stimulate and highlight opportunities. As long as the person has some level of sponsorship, then you can take forward that idea.",
      "Gautam: It\u2019s a lot easier to innovate and pivot in a smaller company. Most of the truly great ideas often originated when organisations were really small. It\u2019s about having an open culture, being willing to fail, and valuing everyone\u2019s opinion.",
      "Katherine: From a work perspective, the Second Machine Age was phenomenal. The other one I have been reading on a personal front is Authentic Happiness by Martin Seligman.",
      "Gautam: One of the movies I really like which links to innovation is Her. One of the scary things about this film is that I don\u2019t think we are really that far away from this."
    ],
    pull_quote: "Innovation definitely needed to come from the top. One of the key messages was: we are changing and we are not going back. This is not a phase, it is reality.",
    tags: ["Thomson Reuters", "Enterprise Innovation", "Culture Change", "Dubai", "Leadership"],
    seo_description: "Katherine Manuel and Gautam Jain of Thomson Reuters on innovating inside a 50,000-person company and building a culture of innovation.",
  },
];
