import prismadb from "@/lib/prismadb";

import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const getBillboard = async () => {
    try {
      const billboard = await prismadb.billboard.findUnique({
        where: {
          id: params.billboardId,
        },
      });

      return billboard;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const billboard = await getBillboard();

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
