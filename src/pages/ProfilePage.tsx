import FilterSection from "../components/filter/filter";
import { Header } from "../components/header/Header";
import MainProfile from '../components/mainProfile/index';


export function ProfilePage() {
  return (
    <>
      <Header />
      <MainProfile />
      <FilterSection page="profile" />
    </>
  );
}
