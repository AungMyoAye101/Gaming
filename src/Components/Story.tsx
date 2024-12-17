import AnimateText from "./AnimateText";

const Story = () => {
  return (
    <section className="min-h-dvh w-screen  py-10">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-xs md:text-sm font-general text-blue-50 uppercase ">
          {" "}
          the multiversal ip world
        </p>

        <div className="size-full relative">
          <AnimateText
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="bg-blend-difference relative z-10"
          />

          <div className="story-img-container ">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="/img/entrance.webp"
                  alt="entrace"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;