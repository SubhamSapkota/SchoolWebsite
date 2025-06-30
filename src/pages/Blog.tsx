import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Preparing Students for the Digital Age",
      excerpt: "How Orchid Secondary School integrates technology into education to prepare students for future careers.",
      date: "March 15, 2024",
      author: "Dr. Rajesh Sharma",
      category: "Education Technology",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "The Importance of Holistic Education",
      excerpt: "Why academic excellence must be balanced with character development and life skills training.",
      date: "March 10, 2024",
      author: "Mrs. Sunita Patel",
      category: "Educational Philosophy",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Career Guidance for +2 Students",
      excerpt: "Essential tips and resources to help higher secondary students make informed career decisions.",
      date: "March 5, 2024",
      author: "Mr. Amit Kumar",
      category: "Career Guidance",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Building Strong Study Habits",
      excerpt: "Effective study techniques and time management strategies for secondary school students.",
      date: "February 28, 2024",
      author: "Ms. Priya Thapa",
      category: "Study Tips",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Parent-Teacher Collaboration",
      excerpt: "How parents and teachers can work together to support student success and development.",
      date: "February 20, 2024",
      author: "Mr. Ravi Sharma",
      category: "Parent Engagement",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Science Fair 2024 Highlights",
      excerpt: "Celebrating innovation and creativity at our annual science fair with outstanding student projects.",
      date: "February 15, 2024",
      author: "Dr. Meera Joshi",
      category: "School Events",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = ["All", "Education Technology", "Educational Philosophy", "Career Guidance", "Study Tips", "Parent Engagement", "School Events"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Insights, tips, and updates from the Orchid Secondary School community
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    index === 0
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{blogPosts[0].category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{blogPosts[0].author}</p>
                        <p className="text-gray-500">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-orange-600 transition-colors duration-200">
                    <a href="#" className="block">{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <p className="font-medium">{post.author}</p>
                      <p>{post.date}</p>
                    </div>
                    <a 
                      href="#" 
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Load More Posts
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest updates, educational insights, and school news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Story to Share?</h2>
          <p className="text-xl text-orange-100 mb-8">
            We'd love to hear from our community. Share your experiences, achievements, or insights with us.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Submit Your Story
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;