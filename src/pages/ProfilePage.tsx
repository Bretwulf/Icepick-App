import FilterSection from "../components/filter/filter";
import { Header } from "../components/header/Header";
import MainProfile from "../components/mainProfile";

export function ProfilePage() {
  return (
    <>
      <Header />
      <MainProfile />
      <FilterSection page="profile" />
    </>
  );
}
