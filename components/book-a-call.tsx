import Link from "next/link";

export default function BookACall({
  children,
  customMessage,
}: {
  children?: React.ReactNode;
  customMessage?: string | React.ReactNode;
}) {
  if ((customMessage && !children) || (!customMessage && !children))
    return (
      <div className="md:px-10 px-5 flex justify-center">
        <div className="flex justify-center pt-5">
          <Link
            target="_blank"
            href={"https://calendly.com/interactiveworkersgm/30min"}
            className="text-center text-(--service-color) bg-(--service-bg) md:text-5xl sm:text-4xl text-3 rounded-2xl px-6 py-3 cursor-pointer 
              hover:scale-109 transition-all duration-300 active:bg-(--service-color) active:text-(--service-bg) active:scale-95"
            style={{ lineHeight: 1 }}
          >
            {customMessage ?? (
              <>
                Book Your Free
                <br className="max-lg:hidden" /> 15-Minute Call
              </>
            )}
          </Link>
        </div>
      </div>
    );

  return (
    <div className="md:px-10 px-5 flex justify-center">
      <div
        className="bg-(--service-bg) text-(--service-color) font-medium px-10 py-8 rounded-2xl md:text-6xl sm:text-4xl text-3xl text-center"
        style={{ lineHeight: 1 }}
      >
        {children}
        <div className="flex justify-center pt-5">
          <Link
            target="_blank"
            href={"https://calendly.com/interactiveworkersgm/30min"}
            className="text-white bg-[#191919] md:text-5xl sm:text-4xl text-3 rounded-2xl px-6 py-3 cursor-pointer 
              hover:scale-109 transition-all duration-300 active:bg-white active:text-[#191919] active:scale-95"
          >
            {customMessage ?? (
              <>
                Book Your Free
                <br className="max-lg:hidden" /> 15-Minute Call
              </>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
