import notfound from '../assets/images/pagenotfound.png'
import {Link} from "react-router-dom";

export function NotFound() {
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Sorry not found</p>
                    <div className="max-w-lg">
                        <img src={notfound} className={"rounded"} alt="page not found"/>

                    </div>
                    <div className="flex justify-center my-4">
                        <Link to={"/"}>
                            <button className={"w-64  text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded px-5 py-2.5 mr-2 mb-2 font-medium "}>Back to where you were</button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

