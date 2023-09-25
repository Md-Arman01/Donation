

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="space-y-5 text-center">
            <h1 className=" text-4xl font-bold">Oops!</h1>
            <p className="font-medium">Sorry, an unexpected error has occurred</p>
            <p className="italic text-gray-400">Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;