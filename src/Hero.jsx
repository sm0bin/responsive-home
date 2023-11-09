
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="hero-image-simple-homepage.png" className="max-w-lg self-start " />
                <div>
                    <h4 className="font-semibold uppercase mb-6">😎  Simple way to communicate</h4>
                    <h1 className="text-5xl font-bold leading-relaxed w-min">Actions for Accessibility in Design</h1>
                    <p className="py-6">The fastest way to build and deploy websites with resusable components.</p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary normal-case font-semibold text-white">Get Started</button>
                        <button className="btn btn-link normal-case font-semibold">Get Live Demo</button>
                    </div>
                    <div className="flex gap-8 my-12">
                        <h4 className="">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="text-green-500 inline-block mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor" /> </svg>
                            No credit card required</h4>
                        <h4 className="">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="text-green-500 inline-block mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor" /> </svg>
                            No software to install</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;