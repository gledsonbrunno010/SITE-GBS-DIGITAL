import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        image: '/assets/projects/project1.png',
        title: 'Projeto 1',
    },
    {
        id: 2,
        image: '/assets/projects/project2.png',
        title: 'Projeto 2',
    },
    {
        id: 3,
        image: '/assets/projects/project3.png',
        title: 'Projeto 3',
    },
    {
        id: 4,
        image: '/assets/projects/project4.png',
        title: 'Projeto 4',
    },
];

export function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-play every 5 seconds (medium-slow)

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section className="py-20 bg-gbs-black text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Projetos Concluídos
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Sites totalmente profissionais que vão aumentar seu faturamento
                    </p>
                </div>

                <div className="relative h-[300px] md:h-[500px] w-full max-w-5xl mx-auto group">
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img
                                key={currentIndex}
                                src={projects[currentIndex].image}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        nextSlide();
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        prevSlide();
                                    }
                                }}
                                className="absolute w-full h-full object-cover object-center"
                                alt={projects[currentIndex].title}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons - Hidden on mobile, visible on hover for desktop */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gbs-green hover:text-black text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 hidden md:block"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gbs-green hover:text-black text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 hidden md:block"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-gbs-green w-8'
                                    : 'bg-white/50 hover:bg-white'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
