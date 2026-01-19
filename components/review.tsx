export default function Review() {
  return (
    <div className="rounded-3xl overflow-hidden lg:max-w-250 md:max-w-150 mx-auto shadow-lg">
      <div className="bg-[#EFEFEF] px-5 pt-5">
        <RateStars count={5} color="[#FFC72F]" />
        <p className="text-justify py-3">
          I have been working with Interactive Workers for over a year and The
          experience has been wonderful. Before working with them, it had been
          so hard for me to find an assistant, and they made it so easy ! They
          have a great team of individuals that can perform many different
          tasks, so it is very easy to choose who you want to work with. The
          company is very organized and takes part in great communication. I am
          very happy with the work of my virtual assistant. 10/10 recommend !
        </p>
      </div>
      <span className="bg-[#191919] text-white px-5 pb-3 font-semibold w-full block">
        Tatiana Mosquera
      </span>
    </div>
  );
}

const RateStars = ({
  count,
  color = "iw-red-1",
}: {
  count: number;
  color?: "white" | "iw-red-1" | "[#FFC72F]";
}) => {
  const fullStars = Math.floor(count);
  const hasHalf = count % 1 !== 0;

  return (
    <div className={`flex gap-1 text-[#FFC72F]`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg
          key={`full-${i}`}
          width="20"
          height="20"
          viewBox="0 0 96 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.0001 0L59.2258 34.5491H95.5529L66.1637 55.9017L77.3894 90.4509L48.0001 69.0983L18.6108 90.4509L29.8365 55.9017L0.447266 34.5491H36.7744L48.0001 0Z"
            fill="currentColor"
          />
        </svg>
      ))}
      {hasHalf && (
        <svg
          key="half"
          width="20"
          height="20"
          viewBox="0 0 96 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 69.0986L18.6104 90.4512L29.8369 55.9014L0.447266 34.5488H36.7744L48 0V69.0986Z"
            fill="currentColor"
          />
          <path
            d="M59.2256 34.5488H95.5527L66.1631 55.9014L77.3896 90.4512L48 69.0986V0L59.2256 34.5488Z"
            fill="#191919"
          />
        </svg>
      )}
      {Array.from({
        length: 5 - fullStars - (hasHalf ? 1 : 0),
      }).map((_, i) => (
        <svg
          key={`empty-${i}`}
          width="20"
          height="20"
          viewBox="0 0 96 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 69.0986L18.6104 90.4512L29.8369 55.9014L0.447266 34.5488H36.7744L48 0V69.0986Z"
            fill="#191919"
          />
          <path
            d="M59.2256 34.5488H95.5527L66.1631 55.9014L77.3896 90.4512L48 69.0986V0L59.2256 34.5488Z"
            fill="#191919"
          />
        </svg>
      ))}
    </div>
  );
};
