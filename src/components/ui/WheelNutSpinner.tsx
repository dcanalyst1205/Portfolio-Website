export default function WheelNutSpinner({ size = 40 }: { size?: number }) {
    return (
        <div className="flex items-center justify-center" role="status" aria-label="Loading">
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                className="animate-wheel-spin"
            >
                {/* Outer rim */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="3"
                />
                {/* Teal track */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#27F4D2"
                    strokeWidth="3"
                    strokeDasharray="70 212"
                    strokeLinecap="round"
                />
                {/* Center nut */}
                <circle cx="50" cy="50" r="12" fill="#1A1A1A" stroke="#27F4D2" strokeWidth="1.5" />
                {/* Nut grooves - hexagonal pattern */}
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <line
                        key={angle}
                        x1="50"
                        y1="50"
                        x2={50 + 10 * Math.cos((angle * Math.PI) / 180)}
                        y2={50 + 10 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#27F4D2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.6"
                    />
                ))}
                {/* Spokes */}
                {[0, 72, 144, 216, 288].map((angle) => (
                    <line
                        key={angle}
                        x1={50 + 14 * Math.cos((angle * Math.PI) / 180)}
                        y1={50 + 14 * Math.sin((angle * Math.PI) / 180)}
                        x2={50 + 40 * Math.cos((angle * Math.PI) / 180)}
                        y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#333"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                ))}
            </svg>
        </div>
    );
}
