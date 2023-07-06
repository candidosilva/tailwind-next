import Avatar from "@/components/Avatar";
import image from "../assets/images/woman.jpg";

export default function Home() {
  return (
    <div className="m-2 flex flex-col items-center justify-center gap-2">
      <p>defult</p>
      <Avatar img={image} />

      <p>square</p>
      <Avatar img={image} square />

      <p>border</p>
      <Avatar img={image} border />

      <p>border square</p>
      <Avatar img={image} square border />

      <p>icon</p>
      <Avatar />

      <p>initials</p>
      <Avatar initials="CS" />

      <p>dot</p>
      <Avatar img={image} dot />
    </div>
  );
}
