
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="hero-image-simple-homepage.png" className="max-w-md" />
                <div>
                    <h4 className="font-semibold uppercase mb-6">😎  Simple way to communicate</h4>
                    <h1 className="text-5xl font-bold">Actions for Accessibility in Design</h1>
                    <p className="py-6">The fastest way to build and deploy websites with resusable components.</p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary normal-case font-semibold text-white">Get Started</button>
                        <button className="btn btn-link normal-case font-semibold">Get Live Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;