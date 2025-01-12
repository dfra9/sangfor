/* eslint-disable prettier/prettier */
import { Head, Link } from "@inertiajs/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Thankyou() {
    return (
        <>
            <Head title="Thank You" />
            <Navbar />
            <main className="mt-10 flex min-h-screen flex-col">
                <section className="relative flex flex-1 items-center justify-center px-4 py-20">
                    <div className="absolute inset-0 bg-[url('/assets/thankyousection.png')] bg-cover bg-center bg-no-repeat opacity-30"></div>
                    <div className="relative z-10 text-center">
                        <div className="mx-auto mb-8 w-96">
                            <img
                                src="/assets/Object.png"
                                alt="Thank you illustration"
                                className="h-auto w-full"
                            />
                        </div>

                        <h1 className="mb-4 text-4xl font-bold text-[#293660]">
                            Thank You for Your Interest
                        </h1>
                        <p className="mb-8 text-lg text-gray-600">
                            Our team will contact you within 5 working days.
                        </p>

                        <Link
                            href="/"
                            className="inline-flex items-center rounded-lg bg-green-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-600"
                        >
                            BACK TO HOMEPAGE
                        </Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
