import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section with Parallax Effect */}
      <div className="relative h-screen bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 transform scale-110">
          <img 
            src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
            alt="Students in modern classroom" 
            className="w-full h-full object-cover opacity-40 animate-pulse"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-orange-900/40 to-black/60"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-300/30 rounded-full blur-md animate-ping"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-5xl transform transition-all duration-1000 ease-out">
            <div className="mb-8 animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                  Welcome to
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-200 via-white to-orange-200 bg-clip-text text-transparent animate-pulse">
                  Orchid Secondary School
                </span>
              </h1>
            </div>
            
            <div className="mb-12 animate-fade-in-up animation-delay-300">
              <p className="text-2xl md:text-3xl text-orange-100 mb-4 font-light tracking-wide">
                Nurturing Excellence, Building Futures
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Where innovation meets tradition in creating tomorrow's leaders
              </p>
            </div>
            
            <div className="animate-fade-in-up animation-delay-600">
              <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-500 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105">
                <span className="relative z-10">Discover Our Programs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section with Enhanced Design */}
      <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
                Excellence in Education
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Why Choose 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Orchid</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide a comprehensive education that prepares students for success in academics, character, and life through innovative teaching and modern facilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Academic Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our rigorous curriculum and dedicated teachers ensure every student reaches their full potential through personalized learning approaches.
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:-rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Character Development
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We focus on building strong moral values and leadership skills in every student through comprehensive character education programs.
                </p>
              </div>
              
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Innovation & Technology
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Modern facilities and cutting-edge technology prepare students for the digital future with hands-on learning experiences.
                </p>
              </div>
              
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Enhanced Visual Appeal */}
      <div className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: "1,200+", label: "Students", icon: "👥", color: "from-orange-400 to-orange-600" },
              { number: "85+", label: "Teachers", icon: "👨‍🏫", color: "from-blue-400 to-blue-600" },
              { number: "95%", label: "Graduation Rate", icon: "🎓", color: "from-green-400 to-green-600" },
              { number: "25+", label: "Years of Excellence", icon: "🏆", color: "from-purple-400 to-purple-600" }
            ].map((stat, index) => (
              <div key={index} className="group transform hover:scale-110 transition-all duration-500">
                <div className="relative">
                  <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-500`}>
                    <span className="text-3xl">{stat.icon}</span>
                  </div>
                  
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-xl text-gray-300 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
                Community Voices
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              What Our 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Community</span> Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students, parents, and alumni about their transformative Orchid experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah Johnson",
                role: "Class of 2023",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
                quote: "Orchid Secondary School gave me the foundation I needed to succeed in university. The teachers truly care about each student's success and go above and beyond.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                name: "Michael Chen",
                role: "Parent",
                image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
                quote: "The holistic approach to education at Orchid has helped my daughter develop both academically and personally. The results speak for themselves.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Science Teacher",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
                quote: "Teaching at Orchid has been incredibly rewarding. The supportive environment allows both students and teachers to thrive and innovate.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-2xl object-cover mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className={`text-sm font-medium bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <svg className="w-8 h-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                      <p className="text-gray-700 italic leading-relaxed text-lg">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
            alt="Students celebrating" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-800/60 to-orange-900/80"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-300/20 rounded-full blur-lg animate-float animation-delay-1000"></div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Join Our 
              <span className="bg-gradient-to-r from-orange-200 to-white bg-clip-text text-transparent">
                Community
              </span>?
            </h2>
            <p className="text-2xl text-orange-100 mb-4 font-light">
              Take the first step towards an exceptional education
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience the difference at Orchid Secondary School where every student's potential is nurtured and excellence is achieved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-500 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2 hover:scale-105">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <span className="relative z-10">Schedule a Visit</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;