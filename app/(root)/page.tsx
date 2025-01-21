import HeaderBox from "@/components/HeaderBox";
import RightSideBard from "@/components/RightSideBard";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Dimitri", lastName: "Nanmejo", email: "contact@gmail.com"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSideBard user={loggedIn} transactions={[]} banks={[{currentBalance:123.50}, {currentBalance: 500.50}]} />
    </section>
  );
};

export default Home;
