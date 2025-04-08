import Image from "next/image";

const MembershipPlans = () => {
    const plans = [
        {
            name: "Basic",
            price: "$29",
            period: "/month",
            features: [
                "Access to basic equipment",
                "Locker room access",
                "Free WiFi",
                "Basic workout guidance",
                "Limited group classes"
            ],
            popular: false
        },
        {
            name: "Standard",
            price: "$49",
            period: "/month",
            features: [
                "All Basic features",
                "Unlimited group classes",
                "Personal trainer consultation",
                "Sauna access",
                "Nutrition guidance"
            ],
            popular: true
        },
        {
            name: "Advanced",
            price: "$79",
            period: "/month",
            features: [
                "All Standard features",
                "24/7 gym access",
                "Personal training sessions",
                "Massage therapy",
                "Premium locker room",
            ],
            popular: false
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Choose Your Perfect Plan</h2>
                    <p className="text-gray-400 text-lg">Select the membership that best fits your fitness goals</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border ${
                                plan.popular 
                                    ? 'border-primary shadow-lg shadow-primary/20' 
                                    : 'border-gray-700'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-tl-lg rounded-br-lg">
                                    Most Popular
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-400 ml-1">{plan.period}</span>
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <button 
                                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                                    plan.popular
                                        ? 'bg-primary text-white hover:bg-primary/90'
                                        : 'bg-gray-700 text-white hover:bg-gray-600'
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MembershipPlans;
