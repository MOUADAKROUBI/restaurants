import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { Helmet } from "react-helmet";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <NotFound />;
  }

  return (
    <>
    <Helmet>
      <title>{`${currentUser.name || currentUser.email} - FoodieFinds`}</title>
      <meta name="description" content="View and manage your profile on FoodieFinds. Update your personal information, view your order history, and manage your favorite restaurants." />
      <meta name="keywords" content="user profile, FoodieFinds, account management, personal information, order history, favorite restaurants" />
    </Helmet>
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
      />
      </>
  );
};

export default UserProfilePage;
