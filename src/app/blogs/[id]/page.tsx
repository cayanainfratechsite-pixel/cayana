// app/page.tsx (or pages/page.tsx depending on your project structure)
import React from "react";
import Image from "next/image";
import {
  FaRegCalendarAlt,
  FaEdit,
  FaClock,
  FaUser,
  FaEye,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Page: React.FC = () => {
  // Dummy data for recent blogs
  const recentBlogs = [
    {
      id: 1,
      title: "Innovative Solutions in Renewable Energy",
      image: "/images/Blog/blogpage.png",
      excerpt:
        "Discover how renewable energy is reshaping the power landscape with innovative solutions.",
      published: "Feb 8, 2025",
    },
    {
      id: 2,
      title: "The Future of Sustainable Architecture",
      image: "/images/Blog/blogpage.png",
      excerpt:
        "Explore groundbreaking trends in sustainable architecture that are setting new standards.",
      published: "Feb 7, 2025",
    },
    {
      id: 3,
      title: "Eco-Friendly Urban Planning",
      image: "/images/Blog/blogpage.png",
      excerpt:
        "Learn how eco-friendly urban planning is revolutionizing modern city designs.",
      published: "Feb 5, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 pt-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Blog Details */}
          <div className="md:col-span-2">
            {/* Header Section */}
            <header className="mb-8 border-b pb-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-4 leading-tight">
                Ahead of the Curve: Prestige's Revolutionary Approach to
                Environmental Conservation
              </h1>
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 space-x-2 sm:space-x-4">
                <div className="flex items-center">
                  <FaRegCalendarAlt className="mr-1" />
                  <span>Published: Feb 10, 2025</span>
                </div>
                <div className="flex items-center">
                  <FaEdit className="mr-1" />
                  <span>Modified: Feb 12, 2025</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-1" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-1" />
                  <span>Jane Smith</span>
                </div>
                <div className="flex items-center">
                  <FaEye className="mr-1" />
                  <span>2.5k Views</span>
                </div>
              </div>
            </header>

            {/* Image Section */}
            <section className="mb-8">
              <div className="w-full border border-gray-200 overflow-hidden">
                <Image
                  src="/images/Blog/blog_bg.webp"
                  alt="Blog Image"
                  width={1200} // set this to your image's original width
                  height={392} // set this to your image's original height
                  className="w-full h-auto object-contain"
                />
              </div>
            </section>

            {/* Content Section */}
            <article className="prose sm:prose lg:prose-xl text-gray-800">
              <p>
                Prestige Golfshire Club is a pioneering example of large-scale
                ecological preservation through tree transplantation in an era
                where environmental sustainability is increasingly crucial.
                Nestled at the scenic Nandi Hills in Bangalore, India, this
                premier golfing destination showcases a harmonious blend of
                luxury and nature. Spread across 297 acres, the club features 14
                man-made lakes over 34 acres, parks over 18 acres, and a golf
                course spanning 155 acres, all contributing to a total greenery
                of 170 acres. However, what truly sets Prestige Golfshire Club
                apart is its groundbreaking tree transplantation project, an
                endeavour unparalleled in scale and success.
              </p>
              <h2 className="font-medium mt-4">
                The Genesis of Tree Transplantation at Prestige Golfshire Club
              </h2>
              <p>
                The concept of tree transplantation at Prestige Golfshire Club
                was born out of a visionary desire to preserve the natural
                landscape while developing a world-class golf course.
                Traditionally, golf course construction involves extensive
                vegetation clearing, but the leadership at Prestige Group,
                particularly Faiz Rezwan, Director of Prestige Group, sought to
                challenge this norm. The initial design proposed a links-style
                course devoid of trees. However, Rezwan's vision of integrating
                the area's natural beauty into the golf course led to the
                ambitious decision to transplant thousands of trees.
              </p>
              <h2 className="font-medium mt-4">An Arduous Journey: 2007-2009</h2>
              <p>
                The tree transplantation project commenced in 2007 and spanned
                two rigorous years. During this period, the team undertook the
                colossal task of moving approximately 2300 trees, with an
                impressive survival rate of 95%. This high success rate is a
                testament to the meticulous planning, scientific techniques, and
                relentless effort of the team involved, supervised tidily by
                Suresh A. M.
              </p>
              <h2 className="font-medium mt-4">The Tree Transplantation Process</h2>
              <p>
                Tree transplantation at Prestige Golfshire Club involved a
                series of carefully executed steps to ensure the health and
                survival of each tree. Here's an in-depth look at the procedure:
              </p>

              <ul className="list-none space-y-3 mt-5">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">
                    <FaArrowRight />
                  </span>
                  <span>
                    <strong>Selection and Planning:</strong> The process began
                    with selecting trees to be transplanted. The chosen species
                    included Coconut (Cocos nucifera), Raintree (Pongamia
                    glabra), Mango (Mangifera indica), Neem (Azadirachta
                    indica), and Gulmohar (Delonix regia). Each tree was
                    assessed for its health and suitability for transplantation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">
                    <FaArrowRight />
                  </span>
                  <span>
                    <strong>Pruning and Preparation:</strong> The selected trees
                    underwent careful pruning to reduce the canopy size, making
                    transportation manageable and reducing the stress on the
                    tree. This step also involved treating the pruned branches
                    with fungicide paste to prevent infections.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">
                    <FaArrowRight />
                  </span>
                  <span>
                    <strong>Excavation:</strong> The excavation process involved
                    digging around the root ball to a depth and width sufficient
                    to retain most of the root system. This root ball was
                    carefully wrapped and secured to prevent soil from falling
                    off during transportation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">
                    <FaArrowRight />
                  </span>
                  <span>
                    <strong>Transportation:</strong> Specialized cranes and
                    heavy machinery were employed to lift and transport the
                    trees to their new locations. This phase required precision
                    and care to avoid damaging the trees.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">
                    <FaArrowRight />
                  </span>
                  <span>
                    <strong>Planting:</strong> At the new site, pre-dug pits
                    were prepared based on the size of the root balls. The pits
                    were treated with termite control measures and filled with a
                    soil mix with peat moss to support root growth. The trees
                    were then placed in these pits, backfilled, and watered
                    thoroughly to settle the soil around the roots.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">
                    <FaArrowRight />
                  </span>
                  <span>
                    <strong>Post-Transplant Care:</strong> The transplanted
                    trees were given extensive post-transplant care, including
                    regular watering, mulching to retain soil moisture, and
                    continuous monitoring for pests and diseases. Protective
                    measures such as wrapping the trunk with jute husk rope were
                    also implemented to safeguard the trees.
                  </span>
                </li>
              </ul>

              <h2 className="font-medium mt-4">Achievements and Impact : </h2>
              <p>
                The tree transplantation project at Prestige Golfshire Club is a
                remarkable achievement, with around 2300 trees successfully
                relocated and thriving in their new environment. The project not
                only preserved the existing flora but also enhanced the
                aesthetic and ecological value of the golf course. Creating 14
                man-made lakes and various water bodies further enriched the
                habitat, attracting diverse wildlife and promoting biodiversity.
                Prestige Golfshire Club has also planted 6382 plants to date,
                further contributing to the area's lush greenery and ecological
                balance.
              </p>
              <h2 className="font-medium mt-4">The Role of Expertise and Innovation</h2>
              <p>
                The success of this project can be attributed to the expertise
                and innovative approaches employed by the team. Scientific
                techniques and advanced machinery ensured the trees were moved
                with minimal stress and maximum care. The involvement of
                environmental experts and continuous research played a critical
                role in refining the transplantation techniques and ensuring the
                health of the trees.
              </p>
              <h2 className="font-medium mt-4">
                Prestige Golfshire Club: A Model for Sustainable Development
              </h2>
              <p>
                Beyond its golf course, Prestige Golfshire Club serves as a
                model for sustainable development. The integration of
                transplanted trees into the landscape has created a lush, green
                environment that benefits both the ecosystem and the community.
                The project has set a precedent for large-scale tree
                transplantation, demonstrating that development and
                environmental conservation can go hand in hand.
              </p>
              <p>
                The tree transplantation project at Prestige Golfshire Club is a
                testament to what can be achieved when vision, innovation, and
                commitment to sustainability converge. This World Environment
                Day, Prestige Golfshire Club reaffirms its dedication to
                preserving nature and promoting biodiversity. The successful
                transplantation of 2300 trees, with a remarkable survival rate,
                underscores the club's role as a leader in environmental
                conservation.
              </p>
              <p>
                As we celebrate the beauty of our planet, let us draw
                inspiration from Prestige Golfshire Club's efforts to save
                ecology and maintain biodiversity. Their journey from 2007 to
                2009 highlights the importance of preserving our natural
                heritage for future generations. Through ongoing conservation
                efforts and community engagement, Prestige Golfshire Club
                contributes significantly to a greener, healthier world.
              </p>
            </article>
          </div>

          {/* Right Column: Recent Blogs */}
          <aside>
            <h2 className="text-lg text-end sm:text-xl md:text-2xl font-medium  text-gray-900 mb-6">
              Recent Blogs
            </h2>
            <div className="space-y-6">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="border border-gray-200 p-4">
                  <div className="w-full border border-gray-200 overflow-hidden mb-4">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={640} // original image width
                      height={480} // original image height
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p>
                  <div className="text-gray-500 text-xs flex items-center">
                    <FaRegCalendarAlt className="mr-1" />
                    <span>{blog.published}</span>
                  </div>
                  {/* Read More Button */}
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-[#0553F1] hover:text-blue-800 text-sm font-semibold"
                    >
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
