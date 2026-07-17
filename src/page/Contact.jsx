const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Soft matcha ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-green-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-green-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-200 hover:border-green-400 transition-all duration-500 hover:shadow-lg relative overflow-hidden">
          {/* Matcha corner accents */}
          <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-green-400/60 hover:border-green-600 transition-colors duration-500"></div>
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-green-400/60 hover:border-green-600 transition-colors duration-500"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-green-400/60 hover:border-green-600 transition-colors duration-500"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-green-400/60 hover:border-green-600 transition-colors duration-500"></div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-green-600 mb-3">LET'S CONNECT</p>
            <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-4">
              Have a project in <span className="text-green-700 drop-shadow-[0_0_8px_rgba(34,197,94,0.2)]">mind?</span>
            </h2>
            <p className="text-green-700 max-w-xl mx-auto">
              Fill out the form below or reach out directly — I’m excited to hear about your idea.
            </p>
          </div>

          {/* Two Column Layout: Contact Info + Form */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Contact Info */}
            <div className="flex-1 space-y-6">
              {/* Address */}
              <div className="p-5 bg-green-50/70 rounded-xl border border-green-100">
                <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location
                </h3>
                <p className="text-green-700 leading-relaxed">
                  Iligan City, Lanao del Norte<br />
                  Northern Mindanao, Philippines
                </p>
              </div>

              {/* Email */}
              <div className="p-5 bg-green-50/70 rounded-xl border border-green-100">
                <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h3>
                <p className="text-green-700 leading-relaxed">
                  krys.dev@email.com<br />
                  hello@krysportfolio.com
                </p>
              </div>

              {/* Phone */}
              <div className="p-5 bg-green-50/70 rounded-xl border border-green-100">
                <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </h3>
                <p className="text-green-700 leading-relaxed">
                  +63 912 345 6789<br />
                  Available Mon–Sat, 9AM–6PM
                </p>
              </div>

              {/* Social Links */}
              <div className="p-5 bg-green-50/70 rounded-xl border border-green-100">
                <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Social
                </h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  {["GitHub", "LinkedIn", "Twitter", "Facebook"].map((social, i) => (
                    <span key={i} className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-md hover:bg-green-200 transition-colors cursor-pointer">
                      {social}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <form className="flex-1 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-1.5">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 text-green-900 placeholder-green-400 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1.5">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 text-green-900 placeholder-green-400 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-green-800 mb-1.5">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 text-green-900 placeholder-green-400 transition-all"
                  placeholder="Project inquiry / Say hello"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-1.5">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 text-green-900 placeholder-green-400 transition-all resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group relative bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 font-medium transition-all duration-500 border border-green-600 hover:border-green-500 shadow-md hover:shadow-lg uppercase tracking-wider overflow-hidden rounded-lg"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-600/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>

          {/* Testimonial */}
          <div className="mt-12 pt-8 border-t border-green-200">
            <p className="text-green-700 text-sm italic mb-3 leading-relaxed">
              "Krys is an exceptional developer who delivers high-quality work on time, and brings great attention to detail to every project."
            </p>
            {/* <p className="text-xs text-green-600 font-medium tracking-wider">— Sarah Johnson, CEO, TechStart</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;