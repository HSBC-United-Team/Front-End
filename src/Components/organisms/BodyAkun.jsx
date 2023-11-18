// import BodyProfileList from "../molecules/BodyProfile";

// function BodyProfile() {
//      const sections = [
//         {
//           title: "Orders",
//           iconSrc: "public/images/svg/Ordersicon.png",
//         },
//         {
//           title: "My Details",
//           iconSrc: "public/images/svg/id.png",
//         },
//         {
//           title: "Delivery Address",
//           iconSrc: "public/images/svg/map.png",
//         },
//         {
//           title: "Payment Method",
//           iconSrc: "public/images/svg/payment.png",
//         },
//         {
//           title: "Promo Card",
//           iconSrc: "public/images/svg/promo.png",
//         },
//         {
//           title: "Notification",
//           iconSrc: "public/images/svg/notif.png",
//         },
//         { title: "Help", iconSrc: "public/images/svg/help.png" },
//         { title: "About", iconSrc: "public/images/svg/about.png" },
//       ];
//       return <BodyProfileList sections={sections} />;
// }

// export default BodyProfile;

import React from "react";
import BodyAccount from "../molecules/BodyAccount";

function BodyAkun (){
  return (
    <div>
      <BodyAccount/>
    </div>
  );
}

export default BodyAkun;

