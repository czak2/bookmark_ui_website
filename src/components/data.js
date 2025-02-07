import {
  chrome,
  firefox,
  image1,
  image2,
  image3,
  opera,
} from "../assets/images";

export const features = [
  {
    image: image1,
    title: `Bookmark in one click`,
    subtitle: ` Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
         over how you manage your favourite sites.`,
    class1: ["relative", "mt-20", "lg:mt-24"],
    class2: ["left-0", "rounded-r-full"],
    classes: [
      "container",
      "flex",
      " flex-col",
      "lg:flex-row",
      " items-center",
      "justify-center",
      "gap-x-24",
    ],
  },
  {
    image: image2,
    title: `Intelligent search`,
    subtitle: `Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
            of your bookmarks.`,
    class1: ["relative", "mt-20", "lg:mt-52"],
    class2: ["right-0", "rounded-l-full"],
    classes: [
      "container",
      "flex",
      " flex-col",
      "lg:flex-row-reverse",
      " items-center",
      "justify-center",
      "gap-x-24",
    ],
  },
  {
    image: image3,
    title: `Share your bookmarks`,
    subtitle: ` Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
            click of a button.`,
    class1: ["relative", "mt-20", "lg:mt-52"],
    class2: ["left-0", "rounded-r-full"],
    classes: [
      "container",
      "flex",
      " flex-col",
      "lg:flex-row",
      " items-center",
      "justify-center",
      "gap-x-24",
    ],
  },
];
export const download = [
  {
    image: chrome,
    title: "Add to Chrome",
    subtile: "Minimum version 62",
    classes: ["flex", "flex-col", "rounded-md", "shadow-md", "lg:mb-16"],
  },
  {
    image: firefox,
    title: "Add to Firefox",
    subtile: "Minimum version 62",
    classes: ["flex", "flex-col", "rounded-md", "shadow-md", "lg:my-8"],
  },
  {
    image: opera,
    title: "Add to Opera",
    subtile: "Minimum version 62",
    classes: ["flex", "flex-col", "rounded-md", "shadow-md", "lg:mt-16"],
  },
];
export const Faqss = [
  {
    title: `What is a Bookmark?`,
    subtitle: `Minimum version 62`,
    classes: ["flex", "flex-col", "rounded-md", "shadow-md", "lg:mb-16"],
    answer:
      "Bookmark is a cloud-based solution to organize and manage your favorite websites.",
  },
  {
    title: `How can I request a new browser?`,
    subtitle: `Minimum version 62`,
    classes: ["flex", "flex-col", "rounded-md", "shadow-md", "lg:my-8"],
    answer:
      "You can request new features by emailing us at support@example.com.",
  },
  {
    title: `Is there a mobile app?`,
    subtitle: `Minimum version 62`,
    classes: ["flex", "flex-col", "rounded-md", "shadow-md", "lg:mt-16"],
    answer: "Yes, we offer a 14-day free trial for all new users.",
  },
];
