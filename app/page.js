import Alert from "@/components/Alert";

const alert = "Some text information.";

export default function Home() {
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
