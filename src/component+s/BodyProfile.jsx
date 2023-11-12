function BodyProfile() {
  const sections = [
    {
      title: "Orders",
      iconSrc: "public/images/svg/Ordersicon.png",
    },
    {
      title: "My Details",
      iconSrc: "public/images/svg/id.png",
    },
    {
      title: "Delivery Address",
      iconSrc: "public/images/svg/map.png",
    },
    {
      title: "Payment Method",
      iconSrc: "public/images/svg/payment.png",
    },
    {
      title: "Promo Card",
      iconSrc: "public/images/svg/promo.png",
    },
    {
      title: "Notification",
      iconSrc: "public/images/svg/notif.png",
    },
    { title: "Help", iconSrc: "public/images/svg/help.png" },
    { title: "About", iconSrc: "public/images/svg/about.png" },
  ];

  return (
    <section>
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex md:px-16 px-7 md:py-5 py-7 justify-between border-b-2"
        >
          <div className="flex gap-4">
            <img className="w-7" src={section.iconSrc} alt="" />
            <p className="font-bold text-[18px]">{section.title}</p>
          </div>
          <button
            onClick={() => console.log(`Button clicked for ${section.title}`)}
          >
            <img src="public\images\svg\backarrow.png" alt="" />
          </button>
        </div>
      ))}
    </section>
  );
}

export default BodyProfile;
