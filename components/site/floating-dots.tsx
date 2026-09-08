'use client';

import { useEffect, useRef } from 'react';

const colors = [
    '#3B82F6',
    '#8B5CF6',
    '#EC4899',
    '#10B981',
    '#F59E0B',
    '#06B6D4',
];

const DOT_COUNT = 18;

export function FloatingDots() {
    const containerRef = useRef<HTMLDivElement>(null);
    const waveRef = useRef<SVGPathElement>(null);
    const waveRef2 = useRef<SVGPathElement>(null);
    const waveRef3 = useRef<SVGPathElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const dots = Array.from(
            container.querySelectorAll<HTMLSpanElement>('.floating-dot')
        );

        const particles = dots.map((dot, index) => {
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.12 + Math.random() * 0.28;

            return {
                element: dot,

                x: Math.random() * 100,
                y: Math.random() * 100,

                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,

                friction: 0.9995,
                index,
            };
        });

        let animationFrame: number;
        let time = Math.random() * 100;

        /*
         * Generate a real continuously moving water surface.
         *
         * The wave is made from many points instead of one simple SVG curve.
         * Each point gets a different sine-wave phase, producing organic motion.
         */
        const createWave = (
            t: number,
            amplitude: number,
            frequency: number,
            speed: number,
            offset: number
        ) => {
            const points = 80;

            let path = `M 0 ${offset}`;

            for (let i = 0; i <= points; i++) {
                const x = (i / points) * 1440;

                const wave1 =
                    Math.sin(i * frequency + t * speed) * amplitude;

                const wave2 =
                    Math.sin(i * frequency * 0.47 + t * speed * 0.63) *
                    amplitude *
                    0.45;

                const wave3 =
                    Math.sin(i * frequency * 1.8 + t * speed * 0.32) *
                    amplitude *
                    0.18;

                const y = offset + wave1 + wave2 + wave3;

                path += ` L ${x} ${y}`;
            }

            path += ` L 1440 500 L 0 500 Z`;

            return path;
        };

        const animate = () => {
            time += 0.012;

            /*
             * Continuously deform the water.
             */
            if (waveRef.current) {
                waveRef.current.setAttribute(
                    'd',
                    createWave(
                        time,
                        25,
                        0.18,
                        1.0,
                        275
                    )
                );
            }

            if (waveRef2.current) {
                waveRef2.current.setAttribute(
                    'd',
                    createWave(
                        time + 25,
                        20,
                        0.15,
                        0.72,
                        315
                    )
                );
            }

            if (waveRef3.current) {
                waveRef3.current.setAttribute(
                    'd',
                    createWave(
                        time + 50,
                        15,
                        0.12,
                        0.5,
                        350
                    )
                );
            }

            /*
             * Floating dots
             */
            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Left / right
                if (particle.x <= 0) {
                    particle.x = 0;
                    particle.vx = Math.abs(particle.vx);

                    particle.vy += (Math.random() - 0.5) * 0.08;
                }

                if (particle.x >= 100) {
                    particle.x = 100;
                    particle.vx = -Math.abs(particle.vx);

                    particle.vy += (Math.random() - 0.5) * 0.08;
                }

                // Top / bottom
                if (particle.y <= 0) {
                    particle.y = 0;
                    particle.vy = Math.abs(particle.vy);

                    particle.vx += (Math.random() - 0.5) * 0.08;
                }

                if (particle.y >= 100) {
                    particle.y = 100;
                    particle.vy = -Math.abs(particle.vy);

                    particle.vx += (Math.random() - 0.5) * 0.08;
                }

                const velocity = Math.sqrt(
                    particle.vx * particle.vx +
                        particle.vy * particle.vy
                );

                const maxSpeed = 0.5;
                const minSpeed = 0.12;

                if (velocity > maxSpeed) {
                    particle.vx =
                        (particle.vx / velocity) * maxSpeed;

                    particle.vy =
                        (particle.vy / velocity) * maxSpeed;
                }

                if (velocity < minSpeed) {
                    const angle = Math.random() * Math.PI * 2;

                    particle.vx += Math.cos(angle) * 0.015;
                    particle.vy += Math.sin(angle) * 0.015;
                }

                particle.vx *= particle.friction;
                particle.vy *= particle.friction;

                particle.element.style.transform = `
                    translate3d(
                        ${particle.x}vw,
                        ${particle.y}vh,
                        0
                    )
                `;
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {/* =========================
                FLOATING WATER
            ========================== */}

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1440 500"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {/* Deep wave */}
                <path
                    ref={waveRef3}
                    fill="rgba(6, 182, 212, 0.06)"
                    d=""
                />

                {/* Middle wave */}
                <path
                    ref={waveRef2}
                    fill="rgba(139, 92, 246, 0.090)"
                    d=""
                />

                {/* Main wave */}
                <path
                    ref={waveRef}
                    fill="rgba(59, 130, 246, 0.1)"
                    d=""
                />
            </svg>

            {/* =========================
                FLOATING DOTS
            ========================== */}

            {Array.from({ length: DOT_COUNT }).map((_, index) => {
                const size = 4 + Math.random() * 5;

                return (
                    <span
                        key={index}
                        className="floating-dot absolute left-0 top-0 rounded-full"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor:
                                colors[index % colors.length],
                            opacity:
                                0.65 + Math.random() * 0.3,
                            willChange: 'transform',
                        }}
                    />
                );
            })}
        </div>
    );
}