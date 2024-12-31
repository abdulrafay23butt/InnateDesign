import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import share from "@/public/images/blog/mdi_instagram.png";
import fb from "@/public/images/blog/iconoir_facebook.png";
import linkedin from "@/public/images/blog/basil_linkedin-outline.png";
import frame1 from "@/public/images/blog/fram1.png";
import frame2 from "@/public/images/blog/Frame2.png";
import carbon from "@/public/images/blog/carbon.png";
import heritage from "@/public/images/blog/heritage.png";
import resilient from "@/public/images/blog/resilient.png";
import native from "@/public/images/blog/native.png";

interface Content {
  type: "text" | "image";
  text?: string;
  text1?: string;
  text2?: string;
  src?: string | StaticImageData;
  alt?: string;
}

interface ArticleSection {
  id: number;
  title: string;
  publishedDate?: string;
  content: Content[];
}

// Define the structure of the props the component will receive
interface ArticleProps {
  id: number; // Receive `id` as a prop
}

const Blog: FC<ArticleProps> = ({ id }) => {
  // Static JSON data for sections
  const sections: ArticleSection[] = [
    {
      id: 1,
      title: "The Positive Impact of Carbon Credits on Indigenous Communities",
      publishedDate: "11 December, 2023", // Add the publication date here
      content: [
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet consectetur. In amet leo dictum quis morbi id...",
        },
        {
          type: "image",
          src: frame1, // Image imported
          alt: "Image description",
        },
        {
          type: "text",
          text: "Sed proin eget nec quam pretium ornare eu est...",
        },
      ],
    },
    {
      id: 2,
      title: "Additional Insights on Carbon Credit",
      publishedDate: "15 December, 2023", // Add the publication date here
      content: [
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet consectetur. Auctor enim nec posuere augue eu varius auctor...",
        },
        {
          type: "image",
          src: frame2, // Image imported
          alt: "Image description",
        },
      ],
    },
    {
      id: 3,
      title: "Additional Insights on Carbon Credit",
      publishedDate: "15 December, 2023", // Add the publication date here
      content: [
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet consectetur. Auctor enim nec posuere augue eu varius auctor...",
        },
        {
          type: "image",
          src: frame2, // Image imported
          alt: "Image description",
        },
      ],
    },
    {
      id: 4,
      title: "Additional Insights on Carbon Credit",
      publishedDate: "15 December, 2023", // Add the publication date here
      content: [
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet consectetur. Auctor enim nec posuere augue eu varius auctor...",
        },
        {
          type: "image",
          src: frame2, // Image imported
          alt: "Image description",
        },
      ],
    },
    {
      id: 5,
      title: "Additional Insights on Carbon Credit",
      publishedDate: "15 December, 2023", // Add the publication date here
      content: [

        {
          type: "image",
          src: frame2, // Image imported
          alt: "Image description",
        },
        {
          type: "text",
          text: "In the fast-paced world of construction management, efficiency and precision are paramount. That’s why we’re excited to introduce JobSync, our revolutionary proprietary software that seamlessly integrates CRM functionality with construction management software tools, all while harnessing the power of AI to predict pricing based on job type and other factors. With JobSync, we’re not just offering a one-stop solution for project management; we’re revolutionizing the way construction businesses operate, streamlining processes, and enhancing decision-making capabilities. Let’s delve into how JobSync can transform your workflow and propel your projects towards success.",
          text1: "JobSync isn’t just another CRM or construction management software; it’s a comprehensive solution designed to meet the unique challenges of the construction industry. By integrating CRM features, JobSync allows you to effortlessly manage client interactions, track leads, and maintain communication channels, ensuring that no opportunity slips through the cracks. Simultaneously, its construction management tools provide a centralized platform for project planning, scheduling, and resource allocation, facilitating smooth collaboration among team members and stakeholders. What sets JobSync apart, however, is its AI-driven pricing prediction capability. Leveraging advanced algorithms and data analytics, JobSync analyzes job types, local market trends, and median incomes to provide accurate pricing estimates, empowering you to make informed decisions and stay competitive in a dynamic market landscape.",
          text2: "In conclusion, JobSync represents a paradigm shift in construction management software, offering a holistic solution that combines CRM functionality, construction management tools, and AI-driven insights. By adopting JobSync, construction businesses can streamline their operations, enhance client relationships, and optimize project outcomes. Whether you’re a small contracting firm or a large construction company, JobSync provides the tools and intelligence needed to thrive in today’s competitive environment. Experience the power of JobSync and take your construction projects to new heights of efficiency and profitability."

        },
      ],
    },
    {
      id: 6,
      title: "Additional Insights on Carbon Credit",
      publishedDate: "15 December, 2023", // Add the publication date here
      content: [
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet consectetur. Auctor enim nec posuere augue eu varius auctor...",
        },
        {
          type: "image",
          src: frame2, // Image imported
          alt: "Image description",
        },
      ],
    },
    {
      id: 7,
      title: "Additional Insights on Carbon Credit",
      publishedDate: "15 December, 2023", // Add the publication date here
      content: [
        {
          type: "text",
          text: "Lorem ipsum dolor sit amet consectetur. Auctor enim nec posuere augue eu varius auctor...",
        },
        {
          type: "image",
          src: frame2, // Image imported
          alt: "Image description",
        },
      ],
    },
  ];

  // Find the section by the provided `id`
  const section = sections.find((section) => section.id === id);

  if (!section) {
    return <p>Section not found!</p>; // Handle if the section with the given id is not found
  }

  return (
    <>
      <div className="w-full max-w-[90%] flex gap-[90px] lg:flex-wrap lg:gap-[50px] mx-auto pt-28 lg:px-5">
        <div className="w-full max-w-[90%] ">
          <h2 className="text-[40px] font-medium leading-[52px] mob:text-[35px]">
            {section.title}
          </h2>
          <div className="flex tab:flex-wrap tab:gap-3 justify-between mt-6 mb-4">
            <Text className="text-[20px] text-[#D9D9D9]">
              Published: {section.publishedDate}
            </Text>
            <div className="flex gap-3">
              <Image src={share} alt="" width={32} height={32} />
              <Image src={fb} alt="" width={32} height={32} />
              <Image src={linkedin} alt="" width={32} height={32} />
            </div>
          </div>
          {section.content.map((item, index) => (
            <div key={index} className="mb-4">
              {item.type === "image" && item.src ? (
                <div className="relative w-full aspect-[10/5]">
                  <Image
                    src={item.src}
                    alt={item.alt!}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : item.type === "text" ? (
                <>
                  <p>{item.text}</p><br />
                  <p>{item.text1}</p><br />
                  <p>{item.text2}</p>
                </>
              ) : null}
            </div>
          ))}
        </div>
        {/* right */}
        <div className="w-full max-w-[340px]">
          <Text className="text-[18px] mb-3">In this article</Text>
          <div className="pl-3">
            <Text className="text-[18px] mb-3">
              Empowering Indigenous Voices through Sustainable Projects
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              The Role of Indigenous Knowledge in Climate Action
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              Carbon Markets and Biodiversity Protection
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              Community-Driven Climate Solutions
            </Text>
            <Text
              as="h2"
              className="text-[30px] leading-[42px] font-semibold mt-[40px] mb-[34px]"
            >
              You May Like
            </Text>

            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image className="" src={carbon} alt="" width={99} height={98} />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D]">
                  Carbon Economy
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px]">
                  Empowering Indigenous Economies through Carbon.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image
                className=""
                src={heritage}
                alt=""
                width={99}
                height={98}
              />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D]">
                  Heritage Sustained
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px]">
                  Preserving Culture, Heritage, and Land.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image
                className=""
                src={resilient}
                alt=""
                width={99}
                height={98}
              />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D]">
                  Resilient Growth
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px]">
                  Climate Resilience and Community Growth.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image className="" src={native} alt="" width={99} height={98} />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D]">
                  Native Stewardship
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px]">
                  Biodiversity Protection through Indigenous Stewardship.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
