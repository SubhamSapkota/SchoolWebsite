import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header Section */}
      <div className="relative h-screen bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 transform scale-110">
          <img 
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
            alt="School campus aerial view" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-orange-900/40 to-black/60"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-300/30 rounded-full blur-md animate-ping"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-5xl transform transition-all duration-1000 ease-out">
            <div className="mb-8 animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                  About
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-200 via-white to-orange-200 bg-clip-text text-transparent">
                  Orchid Secondary School
                </span>
              </h1>
            </div>
            
            <div className="mb-12 animate-fade-in-up animation-delay-300">
              <p className="text-2xl md:text-3xl text-orange-100 mb-4 font-light tracking-wide">
                Nurturing Excellence, Building Futures
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Learn about our mission, vision, and commitment to quality education that transforms lives and shapes tomorrow's leaders
              </p>
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

      {/* Enhanced Mission & Vision */}
      <div className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
                Our Foundation
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Mission & 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Vision</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="group relative">
              <div className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide comprehensive, quality education that nurtures academic excellence, character development, 
                    and critical thinking skills. We are committed to creating a supportive learning environment where 
                    every student can reach their full potential and become responsible global citizens.
                  </p>
                </div>
                
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
            
            {/* Vision */}
            <div className="group relative">
              <div className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:-rotate-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be a leading educational institution recognized for academic excellence, innovative teaching methods, 
                    and holistic student development. We envision graduates who are confident, competent, and compassionate 
                    leaders ready to make positive contributions to society.
                  </p>
                </div>
                
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced History Section */}
      <div className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
            alt="Historical classroom" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
                Our Journey
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to transform education, Orchid Secondary School has been a beacon of learning excellence for over two decades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="group relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                <img 
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                  alt="Modern school building" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h4 className="text-lg font-bold text-gray-900">Modern Campus</h4>
                    <p className="text-sm text-gray-600">State-of-the-art facilities for 21st-century learning</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white font-bold text-xl">25+</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      Years of Excellence
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Established in 1999, Orchid Secondary School began as a small institution with big dreams. 
                      Over the years, we have grown into one of the most respected educational institutions in the region.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white font-bold text-lg">1.2K+</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      Students Served
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our journey has been marked by continuous innovation in teaching methodologies, infrastructure 
                      development, and student support services. Today, we proudly serve over 1,200 students.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white font-bold text-lg">5K+</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      Successful Alumni
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We have graduated thousands of successful alumni who are making their mark in various fields, 
                      from medicine and engineering to business and social service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Values Section */}
      <div className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
                Our Foundation
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Core 
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our educational philosophy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Excellence",
                description: "Striving for the highest standards in everything we do",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                gradient: "from-orange-500 to-orange-600"
              },
              {
                title: "Compassion",
                description: "Caring for our students, staff, and community with empathy",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                gradient: "from-pink-500 to-rose-600"
              },
              {
                title: "Innovation",
                description: "Embracing new ideas and modern teaching methodologies",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                title: "Integrity",
                description: "Maintaining honesty and strong moral principles always",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                gradient: "from-green-500 to-emerald-600"
              }
            ].map((value, index) => (
              <div key={index} className="group text-center transform hover:scale-105 transition-all duration-500">
                <div className={`w-24 h-24 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl group-hover:shadow-orange-500/25`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Leadership Team */}
      <div className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
                Meet Our Leaders
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Leadership 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals leading our institution with vision, passion, and commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Dr. Rajesh Sharma",
                position: "Principal",
                image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                description: "With over 20 years in education, Dr. Sharma leads our institution with vision and dedication to student success.",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                name: "Mrs. Sunita Patel",
                position: "Vice Principal",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                description: "Mrs. Patel oversees academic programs and ensures the highest standards of teaching and learning.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                name: "Mr. Amit Kumar",
                position: "Academic Director",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                description: "Mr. Kumar coordinates curriculum development and maintains our commitment to academic excellence.",
                gradient: "from-green-500 to-green-600"
              }
            ].map((leader, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${leader.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${leader.gradient} text-white px-6 py-3 rounded-full font-semibold shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    {leader.position}
                  </div>
                </div>
                
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
            alt="Students celebrating graduation" 
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
              Join Our 
              <span className="bg-gradient-to-r from-orange-200 to-white bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-2xl text-orange-100 mb-4 font-light">
              Become part of the Orchid Secondary School family
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience excellence in education and join thousands of successful alumni who have transformed their lives through quality education.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-500 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2 hover:scale-105">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;