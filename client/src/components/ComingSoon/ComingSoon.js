const ComingSoon = () => {
    return (
        <div className="flex items-center justify-center h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] lg:h-[60vh] lg:w-[70vw] bg-cover bg-center relative text-white border rounded-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center p-6">
                <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Coming Soon
                </h1>
                <p className="mt-4 text-sm sm:text-base lg:text-lg">
                    We are working on this. Stay tuned!
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;
