"use client";
import { useState } from "react";

const Cockies = () => {

    const [show, setshow] = useState(true);

    const showfun = () => {
      setshow(!show);
    };

    return (
        <div className={show ? "block" : "hidden"}>
            <section class="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 left-12 bottom-16 rounded-2xl" >
            <h2 class="font-semibold text-gray-800 dark:text-white">🍪 We use cookies!</h2>

            <p class="mt-4 text-sm text-gray-600 dark:text-gray-900">Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#" class="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500">Let me choose</a>. </p>

            <p class="mt-3 text-sm text-gray-600 dark:text-gray-900">Closing this modal default settings will be saved.</p>

            <div class="grid grid-cols-2 gap-4 mt-4 shrink-0">
                <button class=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none" onClick={showfun}>
                    Accept all
                </button>

                <button class=" text-xs border text-gray-800 hover:bg-gray-100 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    Reject all
                </button>

                <button class=" text-xs border text-gray-800 hover:bg-gray-100 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    Preferences
                </button>

                <button class=" text-xs border text-gray-800 hover:bg-gray-100 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    Close
                </button>
            </div>
        </section>
        </div>
    )
}

export default Cockies;