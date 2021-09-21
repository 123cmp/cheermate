import {toast} from "react-toastify";

export function rightPad(array, expectedLength, placeholder) {
    const result = [ ...array ];

    for (let i = array.length; i < expectedLength; i++) {
        result.push(placeholder);
    }

    return result;
}

export function showError(message) {
    toast.error(message, {
        position: "top-center",
        pauseOnHover: false,
        closeOnClick: true
    })
}

export function getDebounced(callback, delay) {
    let blocked = false;
    let memoizedArguments = null;

    const debounceTimeout = () => {
        blocked = true;
        setTimeout(() => {
            blocked = false;
            if (memoizedArguments) {
                debouncedFunction(...memoizedArguments);
            }
        }, delay)
    };

    const debouncedFunction = function (...args) {
        if (!blocked) {
            console.log("DEB", args);
            callback(...args);
            memoizedArguments = null;
            debounceTimeout();
        } else {
            memoizedArguments = args;
        }
    }

    return debouncedFunction;
}