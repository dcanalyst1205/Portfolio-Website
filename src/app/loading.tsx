import WheelNutSpinner from "@/components/ui/WheelNutSpinner";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A]">
            <div className="relative">
                <WheelNutSpinner size={80} />

                {/* Loading text with telemetry style */}
                <div className="mt-8 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#27F4D2] animate-teal-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-[#27F4D2] uppercase">
                            SYNCING_TELEMETRY
                        </span>
                    </div>
                    <div className="h-[2px] w-48 bg-[#1A1A1A] rounded-full overflow-hidden">
                        <div className="h-full bg-[#27F4D2] animate-[data-stream_2s_infinite]" />
                    </div>
                </div>
            </div>

            {/* Background grid for consistency */}
            <div className="fixed inset-0 grid-bg pointer-events-none z-[-1]" />
        </div>
    );
}
