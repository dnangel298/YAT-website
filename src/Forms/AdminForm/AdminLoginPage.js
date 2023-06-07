import Login from "./AdminLogin";
import Header from './AdminHeader';

export default function AdminLogin() {
  return (
    <>
      <div className="flex h-screen min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <Header
            heading="Login to your Account"
            paragraph="Don't have an account yet?"
            linkName="Signup"
            linkUrl="/signup"
          />
          <Login />
        </div>
      </div>
    </>
  );
}
