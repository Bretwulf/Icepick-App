import FilterSection from "../components/filter/filter";
import { Header } from "../components/header/Header";


export function ProfilePage() {
  return (
    <>
      <Header />
      <MainProfile />
      <FilterSection page="profile" />
    </>
  );
}
