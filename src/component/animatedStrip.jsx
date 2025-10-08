import React, { useState, useEffect, useMemo, useRef } from "react";

const ElegantCountdownStyles = () => (
    <style>{`
    /* (Your existing styles are perfectly fine, no changes needed here) */
    .elegant-countdown-strip {
      background: linear-gradient(90deg, #1c1c1c 0%, #2c2c2c 50%, #1c1c1c 100%);
      border-bottom: 1px solid #c9a962;
      color: #fff;
      font-family: 'Garamond', 'Times New Roman', serif;
    }
    .text-brand-gold { color: #d4af37; }
    .text-soft-gold { color: #e6d1a1; }
    .drop-shadow-elegant { filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.7)); }
    @keyframes textGlowSubtle {
      0%, 100% { text-shadow: 0 0 5px rgba(212, 175, 55, 0.4), 0 0 10px rgba(212, 175, 55, 0.2); }
      50% { text-shadow: 0 0 10px rgba(212, 175, 55, 0.6), 0 0 20px rgba(212, 175, 55, 0.4); }
    }
    .text-glow-subtle { animation: textGlowSubtle 3s ease-in-out infinite; }
    .sparkle-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; z-index: 5; }
    .sparkle { position: absolute; background-color: #ffd700; border-radius: 50%; opacity: 0; animation: sparkle 2.5s ease-in-out infinite; box-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700; }
    .sparkle:nth-child(1) { width: 4px; height: 4px; top: 20%; left: 10%; animation-delay: 0s; }
    .sparkle:nth-child(2) { width: 2px; height: 2px; top: 50%; left: 30%; animation-delay: 0.5s; }
    .sparkle:nth-child(3) { width: 3px; height: 3px; top: 80%; left: 50%; animation-delay: 1.2s; }
    .sparkle:nth-child(4) { width: 4px; height: 4px; top: 35%; left: 70%; animation-delay: 1.8s; }
    .sparkle:nth-child(5) { width: 2px; height: 2px; top: 60%; left: 90%; animation-delay: 0.8s; }
    @keyframes sparkle {
      0%, 100% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.2); opacity: 1; }
      90% { transform: scale(0.8); opacity: 0.5; }
    }
  `}</style>
);

// CORRECTED: The Countdown Hook now resets its state properly.
const useCountdown = (targetDate) => {
    const calculateTimeLeft = (date) => {
        if (!date) return {};
        const difference = date.getTime() - new Date().getTime();
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (!targetDate || !(targetDate instanceof Date)) {
            setIsFinished(true);
            return;
        }

        const difference = targetDate.getTime() - new Date().getTime();
        if (difference <= 0) {
            setIsFinished(true);
            return;
        }

        // --- FIX #1: Reset the 'isFinished' flag for the new event ---
        setIsFinished(false);

        // --- FIX #2: Immediately set the time left so it doesn't show 0 briefly ---
        setTimeLeft(calculateTimeLeft(targetDate));

        const timer = setInterval(() => {
            const newDifference = targetDate.getTime() - new Date().getTime();
            if (newDifference <= 0) {
                clearInterval(timer);
                setIsFinished(true);
            } else {
                setTimeLeft(calculateTimeLeft(targetDate));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return { timeLeft, isFinished };
};

const TimeUnit = ({ value, label }) => (
    <span className="font-mono text-base tracking-wider bg-black/30 px-2.5 py-1 rounded">
        {String(value).padStart(2, '0')}
        <span className="text-xs ml-1 opacity-70">{label}</span>
    </span>
);

const FestivalCountdown = ({ events }) => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [showSparkles, setShowSparkles] = useState(false);
    const transitionTimeoutRef = useRef(null);

    useEffect(() => {
        const now = new Date();
        // CLEANUP: Using event.date directly as it's already a Date object
        const firstUpcomingEventIndex = events.findIndex(event => event.date > now);
        setCurrentEventIndex(firstUpcomingEventIndex === -1 ? events.length : firstUpcomingEventIndex);
    }, [events]);

    const currentEvent = events[currentEventIndex];
    // CLEANUP: No need for new Date() wrapper here either
    const eventDateObject = useMemo(() => currentEvent ? currentEvent.date : null, [currentEvent]);
    const { timeLeft, isFinished } = useCountdown(eventDateObject);

    useEffect(() => {
        if (isFinished && currentEventIndex < events.length) {
            setShowSparkles(true);
            if (currentEventIndex < events.length - 1) {
                transitionTimeoutRef.current = setTimeout(() => {
                    setCurrentEventIndex(prev => prev + 1);
                    setShowSparkles(false);
                }, 5000);
            }
        }
        return () => clearTimeout(transitionTimeoutRef.current);
    }, [isFinished, currentEventIndex, events.length]);

    const eventMessages = {
        "Dhanteras": "Celebrate the season of prosperity!",
        "Diwali": "Illuminate your celebrations with Tanishq.",
        "default": "The celebration is here!"
    };

    if (currentEventIndex >= events.length) {
        return (
            <div className="elegant-countdown-strip w-full text-center py-3 px-4 shadow-xl">
                <ElegantCountdownStyles />
                <span className="text-lg text-brand-gold">Thank you for celebrating with us.</span>
            </div>
        );
    }

    return (
        <div className="elegant-countdown-strip w-full relative overflow-hidden text-white text-center py-2.5 px-4 shadow-xl">
            <ElegantCountdownStyles />
            {showSparkles && (
                <div className="sparkle-container" aria-hidden="true">
                    <div className="sparkle"></div><div className="sparkle"></div>
                    <div className="sparkle"></div><div className="sparkle"></div>
                    <div className="sparkle"></div>
                </div>
            )}
            <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <span className="text-lg font-medium text-brand-gold drop-shadow-elegant text-glow-subtle">
                    {isFinished
                        ? (eventMessages[currentEvent.name] || eventMessages.default)
                        : `The ${currentEvent.name} Celebration begins in:`
                    }
                </span>

                {!isFinished && (
                    <>
                        <span className="hidden sm:inline-block text-soft-gold opacity-50">|</span>
                        <div className="flex items-center gap-2.5 text-soft-gold">
                            <TimeUnit value={timeLeft.days || 0} label="d" />
                            <TimeUnit value={timeLeft.hours || 0} label="h" />
                            <TimeUnit value={timeLeft.minutes || 0} label="m" />
                            <TimeUnit value={timeLeft.seconds || 0} label="s" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FestivalCountdown;