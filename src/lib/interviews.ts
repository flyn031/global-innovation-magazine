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
}

export const SAMPLE_INTERVIEWS: Interview[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Co-founder & CEO",
    company: "Luminary AI",
    category: "Startups & Venture",
    date: "20 May 2026",
    readTime: "6 min read",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=face",
    subheadline: "On starting from frustration, hiring for curiosity, and why the UK startup scene is finally growing up.",
    descriptor: "co-founder of Luminary AI",
    intro: "Sarah Chen co-founded Luminary AI in 2023 after a decade building products at companies that kept solving the wrong problems. Now based in London, her startup is using machine learning to help enterprise teams ask better questions before they build anything. She\u2019s 34, impatient, and optimistic.",
    insights: [
      "The best companies I\u2019ve seen don\u2019t start with a solution. They start with a frustration so deep that you can\u2019t stop thinking about it. Ours was watching brilliant teams spend months building things nobody asked for. That feeling of waste \u2014 that\u2019s what started Luminary.",
      "We help enterprise teams validate ideas before they commit resources. It sounds simple, but the number of companies that skip this step is staggering. We use machine learning to stress-test assumptions against real market signals.",
      "I remember the exact moment. I was in a boardroom watching a team present a product they\u2019d spent eight months building. The CEO asked one question \u2014 \u2018Did anyone actually ask customers if they want this?\u2019 \u2014 and the room went silent. I quit three months later.",
      "This year we shipped something we\u2019re calling Pulse \u2014 it lets product teams run assumption tests in hours instead of weeks. It\u2019s changed how our clients think about risk. They\u2019re not braver, they\u2019re just better informed.",
      "AI is making it possible to process the kind of qualitative data that used to require armies of analysts. But the real shift isn\u2019t technological \u2014 it\u2019s cultural. Teams are starting to accept that their instincts need evidence behind them.",
      "Hiring for curiosity matters more than hiring for skill. Skills you can teach. The instinct to ask \u2018why\u2019 and \u2018what if\u2019 \u2014 that\u2019s harder to develop. Every interview at Luminary includes a problem we haven\u2019t solved yet. We want to see how people think, not what they already know.",
      "My advice to anyone starting out: talk to fifty potential customers before you write a single line of code. Not ten. Fifty. The patterns don\u2019t emerge until you\u2019ve heard the same frustration described in twenty different ways.",
      "I\u2019m watching the convergence of AI and behavioural science very closely. The companies that understand human decision-making \u2014 not just data patterns \u2014 are going to win the next decade.",
      "In five years, I want Luminary to be the reason fewer products fail. Not because we\u2019re clever, but because we helped teams listen better. The legacy I care about isn\u2019t revenue \u2014 it\u2019s the waste we prevented."
    ],
    pull_quote: "Talk to fifty potential customers before you write a single line of code. Not ten. Fifty.",
    tags: ["Startups", "AI", "Product", "Leadership", "Customer Research"],
    seo_description: "Sarah Chen of Luminary AI on validating ideas, hiring for curiosity, and why most products fail \u2014 a Global Innovation Magazine interview.",
  },
  {
    id: "james-okonkwo",
    name: "James Okonkwo",
    role: "CEO",
    company: "GovTech Partners",
    category: "Public Sector",
    date: "18 May 2026",
    readTime: "8 min read",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face",
    subheadline: "On legacy systems, political will, and what transformation actually means when millions depend on it.",
    descriptor: "CEO of GovTech Partners",
    intro: "James Okonkwo spent twelve years inside the UK civil service before founding GovTech Partners, a consultancy that helps governments modernise their digital infrastructure without breaking the services people rely on. He\u2019s 41, based in Birmingham, and has opinions about the word \u2018transformation\u2019.",
    insights: [
      "People use the word transformation like it\u2019s a weekend project. In government, transformation means changing systems that millions of people depend on every day \u2014 benefits, healthcare, housing. You don\u2019t get to move fast and break things when someone\u2019s rent depends on the thing working.",
      "The founding insight was simple: government doesn\u2019t need more technology. It needs people who understand both the technology and the politics. Those two worlds barely speak to each other.",
      "Our biggest achievement this year was helping a local authority migrate their housing allocation system without a single day of downtime. That doesn\u2019t make headlines, but it meant 40,000 families didn\u2019t experience a disruption in their housing applications.",
      "AI in the public sector terrifies me and excites me in equal measure. The efficiency gains are real. But we\u2019re talking about systems that make decisions about people\u2019s lives \u2014 benefits eligibility, child protection risk scores. The stakes couldn\u2019t be higher.",
      "The biggest challenge is political cycles. A minister gets excited about digital, commissions a project, then gets reshuffled. The project loses its sponsor and dies. We\u2019ve learned to build things that survive changes in political leadership.",
      "Culture in government technology teams is about patience and persistence. You\u2019re not going to ship something in two weeks. But what you ship will be used by everyone. That sense of public purpose keeps good people in the room.",
      "If you\u2019re starting in govtech, learn to speak two languages \u2014 the language of engineering and the language of policy. The gap between them is where all the value is.",
      "The future of public services is invisible technology. The best government digital services are the ones you barely notice \u2014 they just work. That\u2019s what we\u2019re building toward."
    ],
    pull_quote: "You don\u2019t get to move fast and break things when someone\u2019s rent depends on the thing working.",
    tags: ["Public Sector", "GovTech", "Digital Transformation", "AI Ethics", "Leadership"],
    seo_description: "James Okonkwo of GovTech Partners on government digital services, political cycles, and building technology that millions depend on.",
  },
  {
    id: "marta-lindqvist",
    name: "Marta Lindqvist",
    role: "Founder",
    company: "Carbona",
    category: "Climate & Sustainability",
    date: "15 May 2026",
    readTime: "5 min read",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop&crop=face",
    subheadline: "On giving manufacturers the data they\u2019ve been avoiding, and why transparency is the hardest sell.",
    descriptor: "founder of Carbona",
    intro: "Marta Lindqvist founded Carbona in Stockholm in 2022 to solve a problem most manufacturers know they have but prefer not to talk about: they don\u2019t actually know their carbon footprint. Her platform makes emissions measurement automatic, accurate, and impossible to ignore. She\u2019s 38 and refreshingly blunt about it.",
    insights: [
      "Most manufacturers can tell you their revenue to the penny. Ask them their carbon footprint and you\u2019ll get a shrug. That gap between financial precision and environmental vagueness \u2014 that\u2019s where Carbona lives.",
      "The founding moment was reading a sustainability report from a major manufacturer that I knew was essentially fiction. Not because they were lying \u2014 because they genuinely didn\u2019t have the data. They were guessing.",
      "Transparency is the hardest thing we sell. Not the technology \u2014 the willingness to see the truth. Some companies would genuinely rather not know their numbers because once you know, you\u2019re accountable.",
      "This year we automated emissions tracking for supply chains with more than a thousand suppliers. That used to take consultants six months. We do it in real time.",
      "The biggest challenge in sustainability is greenwashing fatigue. Companies that are genuinely trying get lumped in with those that aren\u2019t. Better data is the only way to separate them.",
      "I tell every new hire: we\u2019re not saving the planet. We\u2019re giving people the information they need to make better decisions. That\u2019s less dramatic but more honest.",
      "Regulation is coming whether companies like it or not. The ones measuring now will be ready. The ones who wait will be scrambling.",
      "My legacy isn\u2019t Carbona specifically. It\u2019s the principle that you can\u2019t manage what you don\u2019t measure. If that becomes obvious \u2014 genuinely obvious \u2014 then we\u2019ve done our job."
    ],
    pull_quote: "Transparency is the hardest thing we sell. Not the technology \u2014 the willingness to see the truth.",
    tags: ["Climate", "Sustainability", "Manufacturing", "Carbon", "Data"],
    seo_description: "Marta Lindqvist of Carbona on carbon measurement, greenwashing fatigue, and why manufacturers need to stop guessing.",
  },
  {
    id: "raj-patel",
    name: "Dr. Raj Patel",
    role: "Head of Applied Research",
    company: "Oxford Quantum Labs",
    category: "Deep Tech",
    date: "12 May 2026",
    readTime: "7 min read",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&crop=face",
    subheadline: "On making quantum computing boring, useful, and ready for the real world.",
    descriptor: "head of applied research at Oxford Quantum Labs",
    intro: "Dr. Raj Patel leads applied research at Oxford Quantum Labs, where his team is trying to make quantum computing less of a physics experiment and more of a practical tool. He\u2019s 45, has been in the field for two decades, and is tired of hype.",
    insights: [
      "Quantum computing has a hype problem. Every press release promises revolution. The reality is more interesting than that \u2014 it\u2019s a slow, difficult, genuinely transformative technology that is being undermined by its own marketing.",
      "My job is to find the first problems where quantum actually beats classical computing in a way that matters commercially. Not theoretically. Not in a lab. In a business.",
      "The moment that got me into this field was watching a simulation that would take a classical computer ten thousand years run in minutes. That was twenty years ago and it still gives me chills.",
      "Our breakthrough this year was a quantum optimisation algorithm for pharmaceutical compound screening. It reduced screening time from months to days. That\u2019s not a press release \u2014 that\u2019s patients getting treatments faster.",
      "The biggest challenge is talent. We need people who understand both quantum physics and software engineering. That intersection barely exists yet.",
      "I tell young researchers: the exciting phase of quantum is ending. The useful phase is beginning. That\u2019s where the real careers are.",
      "In five years, quantum won\u2019t be a separate category. It\u2019ll be a feature \u2014 something built into cloud platforms that developers use without thinking about the physics. That\u2019s success.",
      "I want to leave behind a field that\u2019s judged by its applications, not its promises. Boring, useful quantum computing. That\u2019s the dream."
    ],
    pull_quote: "The exciting phase of quantum is ending. The useful phase is beginning. That\u2019s where the real careers are.",
    tags: ["Quantum", "Deep Tech", "Research", "Pharma", "Computing"],
    seo_description: "Dr. Raj Patel of Oxford Quantum Labs on quantum hype, pharma breakthroughs, and making quantum computing boring and useful.",
  },
];

export function getInterview(id: string): Interview | undefined {
  return SAMPLE_INTERVIEWS.find((i) => i.id === id);
}
