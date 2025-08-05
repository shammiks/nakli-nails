import { Link } from "react-router-dom"
import { Clock, DollarSign, Palette, Sparkles, Crown, Heart, Star } from "lucide-react"

export default function Services() {
  const serviceCategories = [
    {
      title: "Nail Enhancements",
      icon: <Crown className="h-8 w-8" />,
      color: "bg-gradient-to-r from-pink-400 to-rose-400",
      services: [
        {
          name: "Acrylic Full Set",
          description: "Durable acrylic extensions with your choice of length and shape",
          price: "$65",
          duration: "90 min",
          addOns: ["French tips (+$10)", "Nail art (+$15)", "Chrome finish (+$20)"],
        },
        {
          name: "Gel Extensions",
          description: "Natural-looking gel extensions that are lighter and more flexible",
          price: "$70",
          duration: "100 min",
          addOns: ["Ombre design (+$15)", "Glitter accent (+$10)", "3D art (+$25)"],
        },
        {
          name: "Overlay (No Length)",
          description: "Strengthen natural nails with gel or acrylic overlay",
          price: "$45",
          duration: "60 min",
          addOns: ["Cuticle oil treatment (+$5)", "Hand massage (+$10)"],
        },
      ],
    },
    {
      title: "Nail Art",
      icon: <Palette className="h-8 w-8" />,
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      services: [
        {
          name: "Custom Nail Art",
          description: "Unique designs created specifically for you",
          price: "$45-85",
          duration: "60-120 min",
          addOns: ["Swarovski crystals (+$15)", "Hand-painted details (+$20)"],
        },
        {
          name: "Minimalist Design",
          description: "Clean, simple designs perfect for everyday wear",
          price: "$35",
          duration: "45 min",
          addOns: ["Gold foil accent (+$10)", "Matte finish (+$5)"],
        },
        {
          name: "3D Nail Art",
          description: "Dimensional art with flowers, bows, and sculptural elements",
          price: "$75-120",
          duration: "120-180 min",
          addOns: ["LED lights (+$30)", "Moving elements (+$40)"],
        },
      ],
    },
    {
      title: "Polish Applications",
      icon: <Sparkles className="h-8 w-8" />,
      color: "bg-gradient-to-r from-pink-400 to-rose-400",
      services: [
        {
          name: "Gel Manicure",
          description: "Long-lasting gel polish that won't chip for weeks",
          price: "$35",
          duration: "45 min",
          addOns: ["Cuticle treatment (+$10)", "Paraffin dip (+$15)"],
        },
        {
          name: "Chrome Finish",
          description: "Mirror-like chrome powder for a futuristic look",
          price: "$55",
          duration: "60 min",
          addOns: ["Color-changing chrome (+$15)", "Holographic effect (+$20)"],
        },
        {
          name: "Classic Polish",
          description: "Traditional nail polish in hundreds of colors",
          price: "$25",
          duration: "30 min",
          addOns: ["Quick-dry treatment (+$5)", "Base & top coat (+$8)"],
        },
      ],
    },
    {
      title: "Manicures & Pedicures",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      services: [
        {
          name: "Luxury Spa Manicure",
          description: "Complete hand treatment with exfoliation, mask, and massage",
          price: "$45",
          duration: "60 min",
          addOns: ["Hot stone massage (+$15)", "Aromatherapy (+$10)"],
        },
        {
          name: "Deluxe Pedicure",
          description: "Relaxing foot treatment with callus removal and massage",
          price: "$55",
          duration: "75 min",
          addOns: ["Sugar scrub (+$10)", "Mud mask (+$15)", "Extended massage (+$20)"],
        },
        {
          name: "Express Manicure",
          description: "Quick nail shaping, cuticle care, and polish application",
          price: "$30",
          duration: "30 min",
          addOns: ["Hand cream treatment (+$8)"],
        },
      ],
    },
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-playfair font-bold mb-4 dark:text-white">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Discover our comprehensive range of nail services designed to make you look and feel amazing
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl font-playfair font-bold text-gray-800 dark:text-white">{category.title}</h2>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl card-hover border border-pink-100 dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="space-y-4">
                      {/* Service Header */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed dark:text-gray-300">{service.description}</p>
                      </div>

                      {/* Price and Duration */}
                      <div className="flex items-center justify-between py-4 border-t border-pink-100 dark:border-gray-600">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-5 w-5 text-pink-400" />
                          <span className="text-lg font-bold gradient-text">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <Clock className="h-5 w-5" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                      </div>

                      {/* Add-ons */}
                      {service.addOns && service.addOns.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 dark:text-gray-300">
                            Popular Add-ons:
                          </h4>
                          <div className="space-y-1">
                            {service.addOns.map((addOn, index) => (
                              <p key={index} className="text-sm text-gray-600 dark:text-gray-400">
                                • {addOn}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Book Button */}
                      <Link to="/booking" className="w-full btn-primary text-center block mt-6">
                        Book This Service
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 text-center dark:bg-gray-800">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-4 rounded-full">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-playfair font-bold mb-4 dark:text-white">
              Special <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 dark:text-gray-300">
              Save more with our curated service combinations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg dark:bg-gray-700">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Bridal Package</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-300">Full set + custom art + trial session</p>
                <div className="text-2xl font-bold gradient-text">$150</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Save $25</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg dark:bg-gray-700">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Monthly Maintenance</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-300">Fill + polish change + cuticle care</p>
                <div className="text-2xl font-bold gradient-text">$40</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Save $15</p>
              </div>
            </div>

            <Link to="/booking" className="btn-primary">
              Book a Package
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
