import { UserButton } from "@clerk/nextjs";

type Props = {};

const SetupPage = (props: Props) => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
