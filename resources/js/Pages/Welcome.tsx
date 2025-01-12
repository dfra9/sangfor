import { Head, Link, useForm } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import React, { useState, FormEvent } from "react";
import Footer from "@/Components/Footer";

export default function Home() {
    const { data, setData, errors, post, processing } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        company: "",
        industry: "",
        phoneNumber: "",
        agreeToContact: false,
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!data.agreeToContact) {
            alert("Please agree to be contacted before submitting.");
            return;
        }

        post(route("submit.form"), {
            preserveScroll: true,
            onSuccess: () => {
                // Form submitted successfully, will automatically redirect to thank you page
                console.log("Form submitted successfully");
            },
            onError: (errors) => {
                console.error("Form submission errors:", errors);
            },
        });
    };
    return (
        <>
            <Head title="Landing Page" />
            <Navbar />
            <main className="flex flex-col">
                {/*Section Hero */}
                <section className="relative flex min-h-screen items-center px-4 py-12 sm:px-6 lg:px-8">
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat bg-center "
                        style={{
                            backgroundImage: "url('/assets/section1.jpeg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                            transform: "scaleX(-1)",
                        }}
                    ></div>
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(0, 0, 142, 0.75) 0%, rgba(4, 190, 2, 0.75) 100%)",
                        }}
                    ></div>
                    <div className="relative w-full max-w-4xl z-10 ml-20 ">
                        <div className="space-y-5 text-left">
                            <h1 className=" font-bold tracking-tight  text-white md:text-5xl  lg:text-6xl sm:text-4xl  text-3xl">
                                Cybersecurity Made Simple
                                <span className="mt-3 block">
                                    with Sangfor Cyber Command
                                </span>
                            </h1>

                            <p className="text-white sm:text-lg md:text-2xl max-w-lg">
                                Simplify your cybersecurity with Sangfor Cyber
                                Command's user-friendly interface and
                                comprehensive threat protection.
                            </p>
                            <div className="mt-10">
                                <Link
                                    href="#section2"
                                    className="bg-green-500 hover:bg-green-500 text-white px-12 py-3 rounded-sm font-medium  items-center space-x-4 transition-colors"
                                >
                                    <span>FREE TRIAL</span>
                                    <span className="text-xl">›</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Sectoion2*/}
                <section className="relative min-h-screen" id="section2">
                    <div
                        className="bg-cover bg-center absolute inset-0"
                        style={{
                            backgroundImage: "url('assets/section2.jpeg",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: "",
                        }}
                    ></div>
                    <div className="relative z-10 py-20">
                        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-10">
                            <div className="grid grid-cols-1 gap-18 lg:grid-cols-2">
                                {/* About */}
                                <div className="pt-16 space-y-16 px-12">
                                    <h2 className="text-4xl font-bold text-[#293660]">
                                        About Sangfor Cyber Command
                                    </h2>
                                    <div className="text-gray-500 space-y-8">
                                        <p>
                                            Sangfor Cyber Command falls into
                                            Network Detection & Response (NDR)
                                            Solutions which is a comprehensive
                                            security management platform
                                            designed to protect businesses from
                                            cyber threats.
                                        </p>
                                        <p>
                                            It provides a range of security
                                            solutions such as threat detection,
                                            incident response, and compliance
                                            management. With Sangfor Cyber
                                            Command, organizations can monitor
                                            their network traffic, analyze
                                            security events, and respond to
                                            incidents quickly and efficiently.
                                        </p>
                                        <p>
                                            The platform uses advanced machine
                                            learning algorithms and big data
                                            analytics to identify and prevent
                                            cyber-attacks before they cause
                                            damage. It also offers a
                                            user-friendly dashboard that enables
                                            businesses to track their security
                                            posture in real-time and make
                                            informed decisions based on the
                                            insights provided.
                                        </p>
                                        <p>
                                            Overall, Sangfor Cyber Command is a
                                            powerful tool for businesses looking
                                            to strengthen their cybersecurity
                                            defenses and safeguard their assets
                                            from modern-day threats.
                                        </p>
                                    </div>
                                </div>
                                {/* Form */}
                                <div className="rounded-lg bg-white p-8 shadow-lg">
                                    <h3 className="mb-6 text-xl font-semibold text-[#293660]">
                                        Dapatkan Free Trial selama 1 bulan,
                                        <span className="mt-1 block text-base text-gray-500">
                                            analisa keamanan network anda dan
                                            lihat hasilnya!
                                        </span>
                                    </h3>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                    placeholder="First Name"
                                                    value={data.firstName}
                                                    onChange={(e) =>
                                                        setData(
                                                            "firstName",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.firstName && (
                                                    <div className="mt-1 text-sm text-red-500">
                                                        {errors.firstName}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                    placeholder="Last Name"
                                                    value={data.lastName}
                                                    onChange={(e) =>
                                                        setData(
                                                            "lastName",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.lastName && (
                                                    <div className="mt-1 text-sm text-red-500">
                                                        {errors.lastName}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Corporate Email *
                                            </label>
                                            <input
                                                type="email"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                placeholder="email@mail.com"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.email && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Job Title *
                                            </label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                placeholder="Your job"
                                                value={data.jobTitle}
                                                onChange={(e) =>
                                                    setData(
                                                        "jobTitle",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.jobTitle && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.jobTitle}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Company Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                placeholder="Your company"
                                                value={data.company}
                                                onChange={(e) =>
                                                    setData(
                                                        "company",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.company && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.company}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Industry *
                                            </label>
                                            <select
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                value={data.industry}
                                                onChange={(e) =>
                                                    setData(
                                                        "industry",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select Industry
                                                </option>
                                                <option value="technology">
                                                    Technology
                                                </option>
                                                <option value="finance">
                                                    Finance
                                                </option>
                                                <option value="healthcare">
                                                    Healthcare
                                                </option>
                                                <option value="manufacturing">
                                                    Manufacturing
                                                </option>
                                            </select>
                                            {errors.industry && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.industry}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                                                placeholder="Your number"
                                                value={data.phoneNumber}
                                                onChange={(e) =>
                                                    setData(
                                                        "phoneNumber",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.phoneNumber && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.phoneNumber}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                                                checked={data.agreeToContact}
                                                onChange={(e) =>
                                                    setData(
                                                        "agreeToContact",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            <label className="ml-2 text-sm text-gray-600">
                                                click this box to agree to be
                                                contacted by our team and get
                                                great deals on Sangfor for
                                                Helios!
                                            </label>
                                        </div>
                                        {errors.agreeToContact && (
                                            <div className="text-sm text-red-500">
                                                {errors.agreeToContact}
                                            </div>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full rounded-md bg-green-500 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                        >
                                            {processing ? "SENDING..." : "SEND"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Section3 */}
                    <section className="relative py-20">
                        <div
                            className="absolute inset-0, transform bg-center bg-no-repeat transition-transform duration-200"
                            style={{
                                backgroundImage:
                                    "url('build/assets/section3.jpeg')",
                                backgroundSize: "cover",
                            }}
                        ></div>
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(0, 0, 142, 0.6) 0%, rgba(4, 190, 2, 0.6) 100%)",
                            }}
                        ></div>
                        <div className="relative container px-4 mx-auto">
                            <div className=" mb-14 text-center items-center">
                                <h2 className="mb-5 font-bold text-white text-center text-5xl ml-11">
                                    Sangfor Cyber Command Advantages
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-lg p-9">
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="assets/VirusScan.png"
                                            className="mb-6 w-32 h-32"
                                        ></img>
                                        <h3 className="text-2xl text-center text-[#293660] font-bold h-7">
                                            Advanced Threat Detection
                                        </h3>
                                        <p className="text-[#382933]">
                                            Sangfor Cyber Command offers
                                            advanced threat detection
                                            capabilities that can help users
                                            identify and respond to potential
                                            security threats in real-time. This
                                            includes identifying and blocking
                                            malware, ransomware, and other types
                                            of cyber threats.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-7">
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="assets/VirusScan.png"
                                            className="mb-6 w-32 h-32"
                                        ></img>
                                        <h3 className="text-2xl text-center text-[#293660] font-bold h-7">
                                            Network Visibility and Control
                                        </h3>
                                        <p className="text-[#382933]">
                                            Sangfor Cyber Command provides users
                                            with visibility and control over
                                            their network infrastructure. This
                                            includes monitoring network traffic,
                                            controlling access to resources, and
                                            managing network policies.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-7">
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="assets/VirusScan.png"
                                            className="mb-6 w-32 h-32"
                                        ></img>
                                        <h3 className="text-2xl text-center text-[#293660] font-bold h-7">
                                            Cloud Security
                                        </h3>
                                        <p className="text-[#382933]">
                                            Sangfor Cyber Command offers cloud
                                            security solutions that can help
                                            users secure their cloud-based
                                            applications and infrastructure.
                                            This includes protecting against
                                            cloud-specific threats like data
                                            breaches, account hijacking, and
                                            insider threats.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-7">
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="assets/VirusScan.png"
                                            className="mb-6 w-32 h-32"
                                        ></img>
                                        <h3 className="text-2xl text-center text-[#293660] font-bold h-7">
                                            Comprehensive Security Management
                                        </h3>
                                        <p className="text-[#382933]">
                                            Sangfor Cyber Command provides users
                                            with a comprehensive security
                                            management platform that can help
                                            them manage and monitor their entire
                                            security infrastructure from a
                                            single console. This includes
                                            managing security policies, tracking
                                            security events, and generating
                                            reports.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Section4*/}
                    <section className="relative py-20 overflow-hidden">
                        <div
                            className="absolute inset-0 scale-125 bg-center bg-no-repeat transform"
                            style={{
                                backgroundSize: "cover",
                                backgroundImage: "('assets/section4.jpeg)",
                            }}
                        ></div>

                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundColor: "white",
                            }}
                        ></div>

                        <div className="container relative mx-auto z-10 px-4">
                            <div className="text-center mb-16 ">
                                <h2 className="mb-6 text-5xl font-bold text-[#293660]">
                                    Sangfor Cyber Command Features
                                </h2>

                                <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                                    {/* Feature1 */}
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="./assets/retina.png"
                                            alt="Threat Intelligence"
                                            className="mb-8 h-32 w-32"
                                        ></img>
                                        <h3 className=" mb-4 text-xl font-bold text-[#293660]">
                                            Threat Intelligence
                                        </h3>
                                        <p className="text-[#293660]">
                                            Advanced AI algorithms and machine
                                            learning provide comprehensive
                                            threat intelligence to stay ahead of
                                            the latest cyber threats.
                                        </p>
                                    </div>
                                    {/* Feature 2 */}
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="./assets/OnlineSopping.png"
                                            alt="Real-Time Detections"
                                            className="mb-5 h-32 w-32"
                                        ></img>
                                        <h3 className=" mb-4 text-xl font-bold text-[#293660]">
                                            Real-Time Detections
                                        </h3>
                                        <p className="text-[#293660]">
                                            Real-time alert system provides
                                            instant notification of potential
                                            security incidents.
                                        </p>
                                    </div>
                                    {/* Feature 3 */}
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="/assets/Spyware.png"
                                            alt="Threats Investigation"
                                            className="mb-5 h-32 w-32"
                                        ></img>
                                        <h3 className=" mb-4 text-xl font-bold text-[#293660]">
                                            Threats Investigation
                                        </h3>
                                        <p className="text-[#293660]">
                                            In-depth Threat investigation
                                            capabilities identify the root cause
                                            of security incidents and take
                                            appropriate action to prevent future
                                            occurrences.
                                        </p>
                                    </div>
                                </div>
                                {/* Feature 4 */}
                                <div className="grid grid-cols-1 mt-16 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:px-60 ">
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="/assets/Hacker.png"
                                            alt="Comprehensive Security Solutions"
                                            className="mb-6 h-32 w-32"
                                        ></img>
                                        <h3 className=" mb-4 text-xl font-bold text-[#293660]">
                                            Comprehensive Security Solutions
                                        </h3>
                                        <p className="text-[#293660]">
                                            In-depth Threat investigation
                                            capabilities identify the root cause
                                            of security incidents and take
                                            appropriate action to prevent future
                                            occurrences.
                                        </p>
                                    </div>
                                    {/* Feature 5 */}
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src="./assets/SafeChat.png"
                                            alt="Rapid Response"
                                            className="mb-6 h-32 w-32"
                                        ></img>
                                        <h3 className=" mb-4 text-xl font-bold text-[#293660]">
                                            Rapid Response
                                        </h3>
                                        <p className="text-[#293660]">
                                            Tight integration with network and
                                            endpoint security solutions enables
                                            quick response to potential security
                                            incidents, minimizing the impact of
                                            any attacks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="relative overflow-hidden py-34">
                        <div
                            className="absolut inset-0 bg-center bg-no-repeat transform scale-110"
                            style={{
                                backgroundImage:
                                    "url('./assets/section4.jpeg')",
                                backgroundSize: "cover",
                            }}
                        ></div>
                        <div
                            className="absolut inset-0"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                            }}
                        ></div>

                        <div className="container mx-auto px-5">
                            <div className="max-w-3xl mx-auto px-4">
                                <h2 className="text-center mb-14 text-4xl font-bold text-[#293660]">
                                    Sangfor Cyber Command’s
                                    <span className="block">
                                        Value to Customers
                                    </span>
                                </h2>
                                {/* Values 1 */}
                                <div className=" space-y-4">
                                    <div className="flex space-x-4">
                                        <svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                        <h3 className="text-lg text-[#6C646A]">
                                            Detect known dan unknown threats
                                        </h3>
                                    </div>
                                    {/* Values 2 */}
                                    <div className="flex space-x-4">
                                        <svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                        <h3 className="text-lg text-[#6C646A]">
                                            Much better visibility of security
                                            posture of the entire infrastructure
                                        </h3>
                                    </div>
                                    {/* Values 3 */}
                                    <div className="flex space-x-4">
                                        <svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                        <h3 className="text-lg text-[#6C646A]">
                                            Business Impact Analysis helps IT to
                                            understand what is already
                                            compromised and what needs to be
                                            prioritized
                                        </h3>
                                    </div>
                                    {/* Values 4 */}
                                    <div className="flex space-x-4">
                                        <svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                        <h3 className="text-lg text-[#6C646A]">
                                            Faster Response to improve overall
                                            security control
                                        </h3>
                                    </div>
                                    {/* Values 5 */}
                                    <div className="flex items-start space-x-4">
                                        <svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.90201 16.098C6.43801 14.634 4.06351 14.634 2.59801 16.098C1.13251 17.562 1.13401 19.9365 2.59801 21.402L9.56551 28.3695C11.739 30.543 15.261 30.543 17.4345 28.3695L18.804 27L7.90201 16.098Z"
                                                fill="#04BE02"
                                            />
                                            <path
                                                d="M33.402 7.098C31.938 5.634 29.5635 5.634 28.098 7.098L13.5 21.696L18.804 27L33.402 12.402C34.866 10.9365 34.866 8.562 33.402 7.098Z"
                                                fill="#293660"
                                            />
                                        </svg>
                                        <h3 className="text-lg text-[#6C646A]">
                                            Much more cost effective than other
                                            solutions such as SIEM
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="relative z-20 mx-auto -mt-8 max-w-4xl px-4 pt-32">
                        <h3 className="bg-[#293660] px-8 py-4 text-center text-2xl font-bold text-white">
                            Cyber Command Customers Reference
                        </h3>
                    </div>

                    {/* Section 6 */}
                    <section className="-mt-8 bg-[#e3e4e8] py-32">
                        <div className="container mx-auto px-4">
                            <div className="mx-auto max-w-4xl">
                                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                                    <img
                                        src="/assets/logo/JNT.png"
                                        alt="J&T"
                                        className="mx-auto h-16 object-contain"
                                    />
                                    <img
                                        src="/assets/logo/jrp.png"
                                        alt="Jasa Raharja Putera"
                                        className="mx-auto h-20 object-contain"
                                    />
                                    <img
                                        src="/assets/logo/ok.png"
                                        alt="OK Bank"
                                        className="mx-auto h-16 object-contain"
                                    />
                                    <img
                                        src="/assets/logo/samudera.png"
                                        alt="Samudera Indonesia"
                                        className="mx-auto h-16 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}

                    <section className="relative overflow-hidden py-14">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-300 "
                            style={{
                                backgroundImage: "url('/assets/section7.png')",
                                backgroundSize: "cover",
                            }}
                        ></div>

                        <div className="container relative mx-auto px-4">
                            <div className="text-center max-w-4xl mx-auto">
                                <h2 className="text-4xl font-bold text-[#293660]">
                                    Explore Sangfor Cyber Command with Helios
                                </h2>
                                <p className="text-[#6C646A] text-xl text-center">
                                    Helios Informatika Nusantara as Sangfor
                                    Distributor will provide
                                </p>

                                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                    <div className="rounded-lg bg-white p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="justify-center flex mb-7">
                                            <div className="rounded-full bg-white">
                                                <img
                                                    src=".public/build/assets/NDR.png"
                                                    alt="NDR Implement"
                                                    className="h-20 w-20"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#293660]">
                                            NDR Implementation
                                        </h3>
                                    </div>

                                    <div className="rounded-lg bg-white p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="justify-center flex mb-7">
                                            <div className="rounded-full bg-white">
                                                <img
                                                    src=".public/build/assets/IRTH.png"
                                                    alt="Incident Response
 and Threat Hunting"
                                                    className="h-20 w-20"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#293660]">
                                            NDR Implementation
                                        </h3>
                                    </div>

                                    <div className="rounded-lg bg-white p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="justify-center flex mb-7">
                                            <div className="rounded-full bg-white">
                                                <img
                                                    src=".public/build/assets/DSM.png"
                                                    alt="Device Security
Maintenance"
                                                    className="h-20 w-20"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#293660]">
                                            NDR Implementation
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <Footer />
            </main>
        </>
    );
}
