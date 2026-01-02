import React from "react";
import HeaderBox from "@/components/headerBox";
import TotalBalaceBox from "@/components/TotalBalaceBox";
import RightSidebar from "@/components/RightSidebar";
const home = () => {
  const loggedIn = {
    firstName: "Nandu",
    lastName: "check",
    email: "contact@gamil.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="access and manage the account"
          />
          <TotalBalaceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.4}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 5000.04 }, { currentBalance: 1650.5 }]}
      />
    </section>
  );
};

export default home;
home;
