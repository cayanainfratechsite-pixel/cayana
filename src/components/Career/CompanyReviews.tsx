"use client";
import { Star, ExternalLink, TrendingUp, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    id: 1,
    name: "Sales Executive",
    role: "Sales Department",
    location: "Bhubaneswar",
    rating: 5,
    date: "06 Aug 2025",
    content: "Cayana Infratech Pvt. Ltd. fosters a progressive and empowering workplace culture. It promotes teamwork, innovation, and continuous learning, enabling employees to grow both personally and professionally. The leadership is transparent and supportive, creating an environment where individuals feel motivated to take initiative and drive their career forward.",
    initials: "SE"
  },
  {
    id: 2,
    name: "HR Executive",
    role: "Compensation & Benefits Dept.",
    location: "Bhubaneswar",
    rating: 5,
    date: "23 May 2025",
    content: "Cayana is the best company in bhubaneswar. You will get on time salary and a corporate environment to work with. Now a days in Bhubaneswar, finding a company like Cayana is tough. CEO is very much friendly and a good human being. Love the workplace like my home.",
    initials: "HE"
  },
  {
    id: 3,
    name: "Senior Operations Manager",
    role: "Operations Department",
    location: "Bhubaneswar",
    rating: 5,
    date: "01 Aug 2025",
    content: "The best thing I liked about Cayana is they are pretty much employee oriented. Both CEO and CMD are taking care of their employee in a very professional way. With a good working environment and culture it was really tough for me to bid a good bye. But I really love everything about Cayana.",
    initials: "OM"
  },
  {
    id: 4,
    name: "Marketing Officer",
    role: "Marketing Department",
    location: "Bhubaneswar",
    rating: 5,
    date: "09 Oct 2025",
    content: "Positive work environment, good work culture, timely salary, and excellent management. The company provides great opportunities for growth and values individual contributions to the team's success.",
    initials: "MO"
  }
];

const CompanyReviews = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 mb-3 text-sm md:text-base font-medium tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100/50 rounded-full"
          >
            Employee Voices
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-slate-900 uppercase mb-2"
          >
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Team Says
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6 shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Real feedback from our talented professionals who drive Cayana Infratech forward every day.
          </motion.p>
        </div>

        {/* Individual Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-blue-200 transition-all duration-500 flex flex-col h-full"
            >
              {/* Quote Icon Decoration */}
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-blue-50 transition-colors duration-500 -z-0">
                <Quote className="w-16 h-16 fill-current" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-tighter">
                    {review.date}
                  </span>
                </div>

                {/* Content */}
                <p className="text-lg text-slate-700 leading-relaxed mb-8 italic flex-grow">
                  "{review.content}"
                </p>

                {/* Profile Section */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-200">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {review.name}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      {review.role} • {review.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms Summary */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-[2rem] p-6 md:p-10 shadow-lg border border-blue-100/50 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-50 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-blue-700 text-xs font-bold mb-4 border border-blue-100 shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>AmbitionBox Rating 2025</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  Check out all our <span className="text-blue-600">50+ authentic reviews</span>
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We are proud to maintain a high rating on major platforms, reflecting our commitment to creating the best workplace in Odisha.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.ambitionbox.com/reviews/cayana-infratech-reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-200 hover:scale-[1.02] active:scale-[0.98] text-sm"
                  >
                    <span>AmbitionBox Profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 md:gap-6">
                <div className="bg-white border border-blue-100 shadow-xl shadow-blue-200/20 p-6 rounded-[1.5rem] flex flex-col items-center gap-2 min-w-[220px]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900 leading-none">4.7</span>
                    <span className="text-xl font-extrabold text-blue-600">/5</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "fill-slate-100 text-slate-100"}`}
                      />
                    ))}
                  </div>
                  <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Excellent Rating</div>
                </div>

                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-blue-100">
                  <div className="relative w-8 h-8 bg-white rounded-lg p-1.5 shadow-sm border border-blue-50">
                    <Image
                      src="/images/ab-brand.png"
                      alt="AmbitionBox"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="font-bold text-slate-800 text-lg tracking-tight">AmbitionBox</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyReviews;

