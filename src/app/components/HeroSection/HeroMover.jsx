import OrbitingCircles from "@/components/ui/orbiting-circles";

export function OrbitingCirclesDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent z-10"
                duration={20}
                delay={20}
                radius={80}

            >
                <Icons.BlockchainIcon />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent z-10"
                duration={20}
                delay={10}
                radius={80}
            >
                <Icons.SolanaIcon />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent z-10"
                radius={190}
                duration={20}
                reverse
            >
                <Icons.BitcoinIcon />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent z-10"
                radius={190}
                duration={20}
                delay={20}
                reverse
            >
                <Icons.EthereumIcon />
            </OrbitingCircles>
        </div>
    );
}

const Icons = {
    EthereumIcon: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 256 417"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="#343434">
                <path d="M127.8 0L125.7 7.6V279.4L127.8 281.5L255.5 208.9L127.8 0Z" />
                <path d="M127.8 0L0 208.9L127.8 281.5V150.4V0Z" />
            </g>
            <g fill="#8C8C8C">
                <path d="M127.8 306.6L126.6 308.2V415.8L127.8 418.8L255.5 232.2L127.8 306.6Z" />
                <path d="M127.8 418.8V306.6L0 232.2L127.8 418.8Z" />
            </g>
            <g fill="#3C3C3B">
                <path d="M127.8 281.5L255.5 208.9L127.8 150.4V281.5Z" />
                <path d="M0 208.9L127.8 281.5V150.4L0 208.9Z" />
            </g>
        </svg>
    ),

    SolanaIcon: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="solana-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#00FFA3" />
                    <stop offset="100%" stopColor="#9945FF" />
                </linearGradient>
            </defs>
            <rect width="400" height="400" rx="50" fill="url(#solana-gradient)" />
            <g fill="#FFF">
                <path d="M64 128L336 128L272 192L0 192L64 128Z" />
                <path d="M64 192L336 192L272 256L0 256L64 192Z" />
                <path d="M64 256L336 256L272 320H0L64 256Z" />
            </g>
        </svg>
    ),
    BlockchainIcon: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="1" y="1" width="8" height="8" />
            <rect x="15" y="1" width="8" height="8" />
            <rect x="1" y="15" width="8" height="8" />
            <rect x="15" y="15" width="8" height="8" />
            <path d="M5 9v6" />
            <path d="M19 9v6" />
            <path d="M9 5h6" />
            <path d="M9 19h6" />
        </svg>
    ),
    BitcoinIcon: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="32" cy="32" r="30" fill="#F7931A" />
            <path
                d="M39.85 30.47c2.1-1.08 3.26-2.79 2.94-5.26-.49-4.2-4.4-5.5-8.77-5.71V14h-4v5.47h-3V14h-4v5.47h-3v4h3v10h-3v4h3V50h4v-5.53h3V50h4v-5.53c4.54-.25 7.47-1.86 8.48-6 .4-1.77-.17-3.42-1.71-4.47zM28.07 24h5.6c2.22 0 3.93.63 4.2 2.63.29 2.12-1.57 2.87-3.68 3h-6.12zm5.6 16.53h-5.6v-6h5.6c2.6 0 4.46.66 4.71 2.71.26 2.26-1.91 3.29-4.71 3.29z"
                fill="#FFF"
            />
        </svg>
    ),
};
