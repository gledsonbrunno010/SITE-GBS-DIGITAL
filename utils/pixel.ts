declare global {
    interface Window {
        fbq: any;
        _fbq: any;
    }
}

export const initPixel = () => {
    if (typeof window === 'undefined') return;

    if (window.fbq) return;

    window.fbq = function () {
        window.fbq.callMethod
            ? window.fbq.callMethod.apply(window.fbq, arguments)
            : window.fbq.queue.push(arguments);
    };

    if (!window._fbq) window._fbq = window.fbq;

    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    window.fbq('init', '2288074398375616');
};

export const trackPageView = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
    }
};
