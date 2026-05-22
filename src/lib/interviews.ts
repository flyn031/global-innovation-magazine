export interface Interview {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  date: string;
  readTime: string;
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
}

export const SAMPLE_INTERVIEWS: Interview[] = [
  {
    id: "sam-pitroda",
    name: "Sam Pitroda",
    role: "Inventor, Entrepreneur & Advisor to the Indian Prime Minister on Innovation",
    company: "C-Sam / Indian Government",
    category: "Deep Tech",
    date: "March 2014",
    readTime: "8 min read",
    photo: "/images/sam-pitroda.png",
    subheadline: "On engineering, poverty, the second telecoms revolution, and why this generational shift is bigger than World War II.",
    descriptor: "India\u2019s godfather of innovation",
    issue: "Issue 1, March 2014",
    archive: true,
    intro: "Sam Pitroda is often cited as the man who revolutionised India\u2019s telecoms industry, enabling most of the country to have access to a phone. He is the Indian Prime Minister\u2019s advisor on innovation, holds more than 100 patents, and runs several businesses including C-Sam, a company at the forefront of mobile wallet technology. James O\u2019Flynn interviewed Sam from his office in Chicago.",
    insights: [
      "I\u2019m still an engineer in my heart, because I see things as systems \u2014 input, output, delay, response, efficiency and productivity. I also integrate this to include social systems: how does my work affect people? Poor people, young people. I think in terms of systems, but multiple dimensions. Being logical, it\u2019s a way of life. Engineering systems are incredibly handy when dealing with social systems.",
      "I\u2019m from a very poor family. My father had a fourth grade education, the family had no money, I borrowed money to travel out of India. I had eight brothers and sisters. I realised that in the beginning making money was important, so when I was young I used to say to my friends, without really understanding its meaning, that I needed to make enough money by the time I\u2019m 40 so that I can do what I want afterwards. The tough task is to stop at that point and focus on something else.",
      "I came to the US to get a PhD in physics. Then my professor told me it takes seven years to get a PhD. I had a girlfriend, and I was young and stupid, so I said, \u2018I\u2019m not going to spend seven years getting a degree!\u2019 So I thought, can I do something quickly to get a job? My professor said, \u2018Yes, you can get a degree in electrical engineering in nine months.\u2019 That\u2019s what I did. Life just takes turns and you never know what will be delivered to you.",
      "A lot of my patents are system patents. My first one was on tone generation \u2014 how do you generate analogue tones using digital memory? This was in the 1960s when people had no idea about such things. Then I had a patent on conference calling and digital conference calls. I had a lot of little ideas! And now I have a series of patents on digital mobile wallets.",
      "We are going through a major generational revolution. I have been saying that this is a bigger event than World War II. This is destruction of a different type. The first telecoms revolution was about connecting people to talk. Not that long ago we had two million telephones in India, today we have millions. Now how do we use that technology to bring education to people, information on agriculture, financial services? It is all about democratisation of information, that\u2019s the next revolution.",
      "We need to reduce cost and improve access to food, education, health and energy. We need to take care of these four things and make it so cheap so that anyone can afford health services, good energy. Surely everyone should have these things today? The problems of the poor really don\u2019t get the talent to solve them that they deserve.",
      "We have to learn to change our developmental model. The model currently is more cars, more homes, more, more, more. That model can\u2019t work for ten billion people. Can we imagine ten billion cars in the world? We have to think about new models, based upon happiness. Where people are happy with personal growth, happy with their family.",
      "I don\u2019t care about titles. So you win a Nobel Prize, big deal. That\u2019s not the game in life, no one\u2019s going to remember you after a while anyway. It\u2019s all fake \u2014 we will give you a plaque, a statue, and all that, and it doesn\u2019t really mean anything. It\u2019s a journey that has to end at some point in time, so enjoy the journey and love people in the process.",
      "If I slow down I die. So I enjoy what I do. Last night I had two hours of video from 11pm to 1am. I got up at 6am, came to the office. I would rather be busy, but I enjoy life and have no stress. Never retire! Always do something, teach kids, help others, but don\u2019t give up.",
      "Gandhi is my hero and his is the model we need. I would really like to see a change of mind, a mind-set change. We are in a mindset from the 19th century. Everybody is arguing, everybody is blaming others rather than blaming ourselves. I think people need to search their souls. Am I a problem? Or am I a solution?"
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
    readTime: "7 min read",
    photo: "/images/brompton.png",
    subheadline: "On fate, folding bikes, proving yourself, and why the best thing you can do for young people is give them responsibility.",
    descriptor: "managing director of Brompton Bicycle",
    issue: "Issue 1, March 2014",
    archive: true,
    intro: "Will Butler-Adams runs Brompton Bicycle, one of the world\u2019s leading manufacturers of folding bikes. All Brompton bicycles are built in their factory in West London, one of only two frame manufacturers still based in the UK. The company remains in private hands and today Brompton bicycles are sold in 42 countries. Global Innovation Magazine spoke to the man credited with taking the company to the next level.",
    insights: [
      "There is more for me to do and in many respects this is driven by a desire to prove myself. Academia was never my strong point. Up until the age of 13 life for me was not about learning but having fun. From 13\u201316 I was in the bottom class of six, so I was in the \u2018fick\u2019 classes. I suppose I am still shaking that off. I did maths, physics and chemistry A-level, and just scraped in to Newcastle University to study engineering, where I finally got a formal education and came out with a First.",
      "It is Andrew Ritchie, inventor of the Brompton Bike, we can thank for creating the Brompton. He took the great risk and had unbelievable resolve and determination. What I have done is taken his baby and helped her grow up. How I have done this is in recognising what skills the business needed, recruiting the right people with those skills and giving them the space and support to do their job. We are a pretty honest company, everything is open.",
      "Many years ago, Will took a ride on a bus and got talking to the man next to him who was the chairman of Brompton Bicycle, Tim Guinness. Tim was looking for someone just like Will to come into Brompton. Will put his plans for an MBA on hold and grasped the opportunity with both hands. Meeting Tim Guinness was extreme fate!",
      "My first project for ICI was to redesign an agitator bearing housing. Basically a big bearing holder at the bottom of an enormous tank to steady a massive stirrer. I had just graduated, I had been taught everything \u2014 stress analysis, CAD etc. It was the most expensive, over engineered and nearly not on time solution to the problem. It was then that I realised that I was not being paid to do the work but instead to deliver the project on time, on budget and fit for purpose.",
      "In my case I think innovation is a generous term. All that I did was do what others have done before me. Unless you happen to be in the most cutting edge of manufacturing technology, the chances are someone has done it and learnt the lessons before you. The trick is to recognise this and go and find the information and the things not to do and apply them to your business.",
      "We make damn good bikes that add value to your life\u2026it is cool!",
      "Give young people responsibility mentally and commercially to prove what they are capable of. Be there to offer support but not to judge and encourage them to take risks.",
      "What makes a good innovator? Do not be afraid to take risks and be confident enough not to follow the crowd.",
      "Do you ever take time to reflect on where you are, to sit back and enjoy? I\u2019m not there yet."
    ],
    pull_quote: "We make damn good bikes that add value to your life\u2026it is cool!",
    tags: ["Manufacturing", "Product Design", "Cycling", "UK Business", "Leadership"],
    seo_description: "Will Butler-Adams of Brompton Bicycle on fate, folding bikes, proving yourself, and why good innovators don\u2019t follow the crowd.",
  },
  {
    id: "sultan-ahmed-bin-sulayem",
    name: "Sultan Ahmed Bin Sulayem",
    role: "Group Chairman & CEO",
    company: "DP World",
    category: "Enterprise Innovation",
    date: "May 2016",
    readTime: "9 min read",
    photo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop",
    subheadline: "On Dubai\u2019s founding vision, building free zones from nothing, and why listening is an amazing art.",
    descriptor: "group chairman and CEO of DP World",
    issue: "Dubai Special, May 2016",
    archive: true,
    intro: "Sultan Ahmed Bin Sulayem is Group Chairman and Chief Executive Officer of DP World and Chairman of Ports, Customs and Free Zone Corporation (PCFC). Two entities at the heart of the Government of Dubai that are pushing and driving improvements and change. Global Innovation Magazine Founder James O\u2019Flynn travelled to Dubai to interview His Excellency.",
    insights: [
      "The first time I ever heard the word \u2018innovation\u2019 was in 1987 from His Highness Sheikh Mohammed bin Rashid during a Ramadan gathering. He uttered: \u2018I need people with vision and innovation to be part of my team. These are going to be the leaders of tomorrow.\u2019 I never understood what he really meant but read between the lines as if he was criticizing me personally.",
      "I was so worried that I couldn\u2019t wait but immediately ask His Highness what he intended by that remark. He answered smilingly: \u2018I meant that all of you must change your pattern of thinking towards positivity, you must break away from defeatist thinking, and you should accept that there is no such thing as a deadlock. My team has no room for whoever can\u2019t behave like this.\u2019",
      "People often ask, \u2018Why do you have so many high rise buildings in Dubai?\u2019 \u2014 this is a necessity. Dubai is a small place; if we didn\u2019t opt to go vertically then our children would never see nature, as the whole place would have been covered. When I talk about Dubai and what I did, you can characterise it in blocks of ten years.",
      "I was involved with the free zone, the Jebel Ali free zone, which I started in 1985, and DP World in the 1990s. A lot of things that have happened in Dubai evolved from necessity, and necessity is the mother of invention.",
      "Through customs, ports, airports and free zones, we process about 18\u201319 million documents a year. That is about 1.5 million documents a month. Before we launched the electronic Government, we would never have been able to deal with so many. His Highness Sheikh Mohammed wanted to establish an electronic Government. He managed by example.",
      "A lot of the time, I will admit, that innovation has come from within the organisation, rather than from the top. In airport customs, they come up with amazing initiatives out of necessity \u2014 not because we were pushing them, but because they found a way that takes them less time to do their job with precision.",
      "The way I lead is that I want people to challenge ideas and talk to me without hesitation. I like to hear other opinions, so when people bring new ideas I am extremely accommodating. I welcome every single idea. What happens then is that ideas can be refined and adapted to find another way.",
      "When I have an idea I try to sell it, I try to convince people. You know, as a boss, you can always just tell people to do things, but if it fails they will just say, \u2018I wasn\u2019t convinced.\u2019 That\u2019s why I always try and work with my people to convince them \u2014 because when a person is as passionate as you are, they will achieve the goal.",
      "Much of our success comes from our employees, and our customers. In the 1980s, I used to have a breakfast meeting every week where I would invite free zone companies, employees and customers. We would brainstorm and come up with ideas. When you listen, you learn so much. Sometimes people want to talk, they want to hear themselves talking, and they miss so much. Listening is an amazing art."
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
    readTime: "7 min read",
    photo: null,
    subheadline: "On growing up between continents, digital banking\u2019s next frontier, and why being observant matters more than being clever.",
    descriptor: "head of innovation at Synechron",
    issue: "Dubai Special, May 2016",
    archive: true,
    intro: "Synechron is a fast growing digital, business consulting and technology services provider based in New York, but with a global reach, including a base in Dubai. David Horton is their Head of Innovation, working at the cutting edge of banking and finance. We spoke to him about what inspires him and how he keeps up-to-date with fast-paced technological change.",
    insights: [
      "I am one of those people who is a bit of a traveller; my parents moved around the world. I was born in Zimbabwe, and moved to South Africa when I was very young. My parents returned to the UK, then did a stint in the Middle East, so I did seven years as an ex-pat child here. I finished school and university then moved back to London where I worked for several years, before marrying, having children and moving back to the Middle East.",
      "My background is really on the technology side of things \u2014 IT. Starting from being the guy you rang up on the helpdesk who helps everyone out, I found a few niche areas. I did some training and teaching, showing people how to use Microsoft Windows, which was valuable. Essentially showing people how to use computers, but in a very human way. I always think this helped me in many ways, particularly in the work that I do now.",
      "When you speak with business users about innovation or technology, they want you to put things in business terms. Ninety per cent of what I do is around explaining technology in terms of how it will benefit businesses if they decide to invest in it. Otherwise it\u2019s a difficult sell.",
      "When I first joined I was known in the local banking community and one of the previous projects I had worked on was a \u2018digital branch\u2019, an innovative hub where customers would come in and service their bank accounts through digital walls or digital tables. When you show people around a place that is real, tangible and concrete it becomes an easy sell. It is not a presentation \u2014 people can experience and feel the new customer journey for themselves.",
      "We have integrated \u2018beacons\u2019 into the Centre which demonstrate the potential for bank loyalty schemes. As customers walk past a particular point they get tailored \u2018beacon\u2019 alerts on their phone. This solution allows customers to walk into a particular restaurant, for example, and get an alert telling them they qualify for a special discount with their banking package.",
      "Over the last few years there has been a convergence of innovation and it is really opening up doors to do things that were just not possible a few years ago. Products such as Amazon Echo \u2014 a wireless speaker and voice command device that uses natural language \u2014 opens up really exciting possibilities. Blockchain, although in its early stages, is another area that is definitely going to cause some disruption, not just in banking but across so many areas.",
      "By doing lots of reading. The one thing that social media does is it allows you to follow and keep in touch with thought leaders. I follow five or six people on Twitter, particularly around FinTech, which gives me a good oversight of what is happening in London or Silicon Valley. LinkedIn is also a valuable place to learn.",
      "Just be observant. Kids do things so differently, so watching them and looking at where they are shining their lights is also valuable. I try to observe as much as I can around my environment. I have a great team with a big imagination, so we often sit together and discuss opportunities and build prototypes which seems to work really well."
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
    readTime: "8 min read",
    photo: null,
    subheadline: "On innovating inside a 50,000-person company, why culture change has to come from the top, and the books that shaped their thinking.",
    descriptor: "innovation leaders at Thomson Reuters",
    issue: "Dubai Special, May 2016",
    archive: true,
    intro: "Thomson Reuters is a multinational media, information and technology company operating in more than 100 countries, with over 50,000 people. Innovating at scale is tough but essential. Global Innovation Magazine spoke to Katherine Manuel, Senior Vice President, Innovation and Gautam Jain, Head of Strategic Planning & Operations, MENA, about embedding a culture of innovation across the organisation.",
    insights: [
      "Katherine: One of my first jobs was working for a strategy and technology firm for a few years, before I got my MBA degree. Thomson Reuters have a great management associates programme where they rotate MBAs throughout the organisation. I moved around as part of the programme then began to work in the strategy side of the business. I ended up running the technology strategy area. After a few years I wanted to try something different so I started working more on the strategy communications side of things. When Jim Smith became CEO I came back to work in the office of the CEO as a Vice President of Strategy. After some time here working on the transformation programme I was asked to head up innovation.",
      "Gautam: I grew up in a small town near Mumbai, India. I studied computer technology, then joined the country\u2019s largest IT consulting firm. I then pursued my MBA in Finance from Mumbai University, and like Katherine, joined the Business Graduate Programme at Thomson Reuters. I spent the initial six months on the customer helpdesk which was an excellent place to learn about our products and customers.",
      "Katherine: Innovation definitely needed to come from the top, from our CEO. At the end of 2013 there were some big announcements in terms of transformation, and one of the key messages was that we are changing and we are not going back. So this is not a phase, it is reality. We had previously grown through acquisition. Through transformation we had to rationalise and make sense of our acquisitions, but then drive and grow, fundamentally through innovation.",
      "The MENA Innovation Lab was inaugurated in July 2015 by HH Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dubai. The purpose of the lab is to foster a culture of innovation in MENA by providing opportunities to staff, clients and third parties to gather, discuss and try innovative ideas. This enabled entrepreneurs and start-ups to establish smart applications, transform data into knowledge, and ultimately give them a leg-up in terms of innovating.",
      "Katherine: Identify innovation change agents \u2014 people who can stimulate and highlight opportunities. We provide the opportunity for our staff members who have good ideas to take them forward, and get some time in front of our senior management team to pitch and work out their ideas. As long as the person has some level of sponsorship, then you can take forward that idea and discuss it with people in the organisation that could make it a reality.",
      "Gautam: My honest opinion is that it\u2019s a lot easier to innovate and pivot in a smaller company, exactly because of its size and because often there are fewer corporate barriers. Most of the truly great ideas often originated when organisations were really small anyway. It\u2019s about having an open culture, being willing to fail, and having leaders or founders who can get the best ideas out of people, opening the conduit of communication, and valuing everyone\u2019s opinion.",
      "Katherine: I will say that, from a work perspective, the Second Machine Age was phenomenal. The other one I have been reading on a personal front is Authentic Happiness by Martin Seligman, who works out of the University of Pennsylvania. It looks at how you take someone who is very happy, and how you can make them even happier.",
      "Gautam: One of the movies I really like which links to innovation is Her, which is about a man who falls in love with his virtual assistant on his mobile device. One of the scary things about this film is that I don\u2019t think we are really that far away from this. I am in the middle of the book Getting Things Done, by David Allen, which has lots of tips that can help in terms of productivity and managing time."
    ],
    pull_quote: "Innovation definitely needed to come from the top. One of the key messages was: we are changing and we are not going back. This is not a phase, it is reality.",
    tags: ["Thomson Reuters", "Enterprise Innovation", "Culture Change", "Dubai", "Leadership"],
    seo_description: "Katherine Manuel and Gautam Jain of Thomson Reuters on innovating inside a 50,000-person company, culture change, and the books that shaped their thinking.",
  },
  {
    id: "boyan-slat",
    name: "Boyan Slat",
    role: "Founder & CEO",
    company: "The Ocean Cleanup",
    category: "Climate & Sustainability",
    date: "September 2014",
    readTime: "8 min read",
    photo: "/images/ocean-cleanup.png",
    subheadline: "On finding more plastic than fish, dropping out of university, and why the only appropriate response to criticism is a 530-page feasibility report.",
    descriptor: "founder of The Ocean Cleanup",
    issue: "Issue 2, September 2014",
    archive: true,
    intro: "Boyan Slat came to the world\u2019s attention overnight when his TED talk went viral. He was 18 years old at the time, and claimed to have developed a solution to collecting the millions of pieces of plastic in the world\u2019s oceans. He heads The Ocean Cleanup, an organisation working to harness the power of the oceans to collect and harvest debris. James O\u2019Flynn spoke to Boyan from the Netherlands.",
    insights: [
      "I have always been interested in engineering and technology, I have always entertained myself thinking about solving problems. I was 16 years old and it struck me that I was coming across more plastic in the ocean than fish. These types of problems are the major challenges of our generation.",
      "When I was 5 I was obsessed with Lego. A lot of science experiments. I was a geek growing up, I still am. I have always thought about things a little differently. Teachers would always complain, saying I would never stick to an assignment.",
      "I was doing a high school science project and decided to use this time to study the problem. Like everyone else I originally was thinking about nets, but I quickly realised this wouldn\u2019t be feasible. The violence and size of the ocean, and the associated cost and by-catch meant it wouldn\u2019t work. I was in the Azores, in a restaurant on the terrace and came up with the idea of harnessing the ocean\u2019s power to collect the plastic. Hey presto.",
      "I couldn\u2019t stop thinking of the project and by this time I was at Delft University of Technology. I started talking to professors and industry experts, and came up with 50 questions that I needed to answer for this to become feasible. The process was ridiculously slow. I then decided to put my studies on hold, as well as socialising. I put everything into it, gave myself half a year and put all my 300 pocket money euros into it.",
      "Originally only two people offered help, but after the TED talk went viral I was getting about 1,500 emails a day, with people offering their help. This enabled the crowd-funding and team to be assembled which grew to 100 people. We then proved our feasibility.",
      "I wasn\u2019t surprised at the criticism. Many people have been working on this topic for years. Suddenly an 18 year old says I can clean the ocean. I understand. How did I deal with it? I decided not to respond at first. It was just an idea a year ago, so the only appropriate response would be a 530-page feasibility report that shows it is actually feasible. We have now published the report.",
      "We have proven that the plastic can be turned into oil \u2014 three independent companies have confirmed this. Another option is mechanical recycling; we have also shown it\u2019s suitable for injection moulding so we can make anything out of it. The quality is much better than expected.",
      "There are no islands of plastic as some people think. It\u2019s very dispersed. The scale is huge though. 95 per cent of the plastic is quite large \u2014 all the way up to parts of boats, jerry cans, nets.",
      "All entrepreneurs want to be in a position of going from controlling it all, to where it controls itself somewhat. Sometimes it\u2019s difficult, but you learn. Personally I really like being involved in the engineering process, so I put a lot of my time aside to work on the research and development side of things."
    ],
    pull_quote: "The only appropriate response to criticism would be a 530-page feasibility report that shows it is actually feasible. We have now published the report.",
    tags: ["Ocean Cleanup", "Climate", "Engineering", "Startups", "Sustainability"],
    seo_description: "Boyan Slat of The Ocean Cleanup on finding more plastic than fish, going viral at 18, and building a 100-person team to clean the world\u2019s oceans.",
  },
];

export function getInterview(id: string): Interview | undefined {
  return SAMPLE_INTERVIEWS.find((i) => i.id === id);
}
