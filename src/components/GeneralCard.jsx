import { Card } from "@material-tailwind/react/components/Card";

function GeneralCard({ children }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-96 p-4 m-4">{children}</Card>
    </div>
  );
}

export default GeneralCard;
