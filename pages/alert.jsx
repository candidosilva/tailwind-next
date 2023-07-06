import Alert from "@/components/Alert";
import "tailwindcss/tailwind.css";

const alert = "Some text information.";

export default function AlertPage() {
  return (
    <div className="m-4 flex flex-col gap-4">
      <Alert type="success" text={alert} closable />
      <Alert type="info" text={alert} />
      <Alert type="error" text={alert} />
      <Alert type="warning" text={alert} closable />
      <Alert text={alert} closable />
    </div>
  );
}
