

const Simple = () => {
    return (
        <section className="bg-simple-bg relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10">
            <div className="">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
                    <h3 className="text-center text-white text-3xl lg:text-5xl font-semibold mb-6">Your Journey to Fitness <br />Starts Here</h3>
                    <p className="text-center text-white/40 text-lg font-normal mb-8">Achieve your goals with expert-led workouts, live sessions,<br /> and personalized plans — all in one place.</p>
                    <div className="flex justify-center ">
                        <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl'>
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Simple;
