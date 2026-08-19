export const portraitWorksRow1 = Array.from({ length: 12 }, (_, i) => ({
  src: `/portfolio/portrait-row-1/${i + 1}.png`,
  alt: `Mobisa portfolio visual ${i + 1}`
}));

export const portraitWorksRow2 = Array.from({ length: 13 }, (_, i) => ({
  src: `/portfolio/portrait-row-2/${i + 13}.png`,
  alt: `Mobisa portfolio visual ${i + 13}`
}));

export const workflowSteps = [
  {
    number: "01",
    title: "Brief & Direction",
    description: "We start with your brand's voice, references, and goals — translating vague ideas into a clear creative direction."
  },
  {
    number: "02",
    title: "Prompt Engineering & Concept Development",
    description: "Using advanced AI prompting, we generate multiple concept directions — iterating on lighting, composition, and detail until the raw output has real potential."
  },
  {
    number: "03",
    title: "Refinement & Craft",
    description: "Every AI-generated asset goes through human hands — retouching, grading, and layout work that turns \"AI-generated\" into \"production-ready.\""
  },
  {
    number: "04",
    title: "Final Delivery",
    description: "The finished asset, delivered exactly how you'll use it — on your product page, in your feed, or in front of investors."
  }
];

export const SITE_DATA = {
  rating: "★★★★★ 4.5/5",
  killerStatement: "we don't just deliver designs.",
  killerStatementSub: "we create visuals people remember.",
  ctaHeadline: "ready to make something impossible to ignore?",
  ctaButton: "Start a project",
};
