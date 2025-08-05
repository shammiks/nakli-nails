import { Heart, Award, Users, Sparkles, Star, Shield, Clock } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Beauty",
      description:
        "Every design we create comes from a genuine love for nail artistry and making our clients feel beautiful.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence in Craft",
      description:
        "We continuously refine our skills and stay updated with the latest techniques and trends in nail art.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description:
        "We maintain the highest standards of hygiene and use only premium, safe products for all our services.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centered",
      description: "Your satisfaction is our priority. We listen, understand, and deliver exactly what you envision.",
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & Lead Artist",
      image: "https://imgs.search.brave.com/JMJ7J3VCD4MrB102jVVobdJ1EJKax0tMEWT5vTZoJ_o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE5/NTQ2MTY1L3Bob3Rv/L25haWwtdGVjaG5p/Y2lhbi1naXZpbmct/Y3VzdG9tZXItYS1t/YW5pY3VyZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Q2g5/ZlBtbk4waHRNci1W/eHRXcXlmQ1Y5aXhh/OHNkN29RZHNjOVd2/Z1VkQT0?height=400&width=400",
      bio: "With over 5 years of experience in nail artistry, Sarah founded Nakli Nails with a vision to bring creative, high-quality nail services to Canada.",
    },
    {
      name: "Maya Patel",
      role: "Senior Nail Technician",
      image: "https://imgs.search.brave.com/KRR6DTUjeatJ4QkeDiO_7NSi_1c-PtsfGJ3GhSa-x_8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE5/NTQ2MTU3L3Bob3Rv/L25haWwtdGVjaG5p/Y2lhbi1naXZpbmct/Y3VzdG9tZXItYS1t/YW5pY3VyZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cEtw/TEh0MkMxZm5fM0Y0/a0QyNkVBX0Q5aVBk/UktsQTZFYjR4blR3/X0hMYz0?height=400&width=400",
      bio: "Maya specializes in intricate nail art and has won multiple awards for her innovative designs and attention to detail.",
    },
    {
      name: "Jessica Wong",
      role: "Nail Artist & Educator",
      image: "https://imgs.search.brave.com/KRR6DTUjeatJ4QkeDiO_7NSi_1c-PtsfGJ3GhSa-x_8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE5/NTQ2MTU3L3Bob3Rv/L25haWwtdGVjaG5p/Y2lhbi1naXZpbmct/Y3VzdG9tZXItYS1t/YW5pY3VyZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cEtw/TEh0MkMxZm5fM0Y0/a0QyNkVBX0Q5aVBk/UktsQTZFYjR4blR3/X0hMYz0?height=400&width=400",
      bio: "Jessica brings creativity and precision to every appointment, with expertise in both classic and avant-garde nail designs.",
    },
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-playfair font-bold mb-4 dark:text-white">
            About <span className="gradient-text">Nakli Nails</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Discover the story behind Canada's premier boutique nail salon and the passionate team that makes it all
            possible
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl font-playfair font-bold dark:text-white">
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed dark:text-gray-300">
              <p>
                Nakli Nails was born from a simple yet powerful belief: everyone deserves to feel confident and
                beautiful. Founded in 2021 in the heart of Toronto, we started as a small studio with big dreams and an
                unwavering commitment to excellence.
              </p>
              <p>
                What began as a passion project has grown into Canada's most sought-after boutique nail salon. We've
                built our reputation on creativity, quality, and personalized service that makes every client feel
                special.
              </p>
              <p>
                Today, we're proud to serve hundreds of satisfied clients, each with their own unique style and story.
                From minimalist elegance to bold artistic statements, we bring every vision to life with precision and
                care.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Designs Created</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up delay-300">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://imgs.search.brave.com/QqfNVsBe0OvWlvPlwiTryR0eKWFO9HfEVW4lopzIQLY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEwLzlk/L2ZmLzEwOWRmZjBh/N2Y4YjhkZTM3MzM1/YmYxZTZiYTM1OWQz/LmpwZw?height=500&width=400"
                alt="Nakli Nails Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl dark:bg-gray-800">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-playfair font-bold mb-4 dark:text-white">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              The principles that guide everything we do at Nakli Nails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl card-hover text-center dark:bg-gray-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-pink-400 to-rose-400 w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-playfair font-bold mb-4 dark:text-white">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              The talented artists behind every beautiful design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl card-hover dark:bg-gray-800"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="text-pink-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 dark:from-gray-800 dark:to-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4 dark:text-white">
              Why Choose <span className="gradient-text">Nakli Nails?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Here's what sets us apart from other nail salons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center dark:bg-gray-600">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Custom Designs</h3>
              <p className="text-gray-600 text-sm dark:text-gray-300">
                Every design is tailored to your unique style and preferences
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center dark:bg-gray-600">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Premium Products</h3>
              <p className="text-gray-600 text-sm dark:text-gray-300">
                We use only the highest quality, safe, and long-lasting products
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center dark:bg-gray-600">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm dark:text-gray-300">
                Convenient appointment times that work with your busy schedule
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
