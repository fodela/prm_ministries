import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end">
      <img
        src="https://prmministries.org/wp-content/uploads/2021/09/Picture1.png"
        alt="PRM Ministeries logo"
        height={45}
        width={45}
      />
      <div className="flex flex-col">
        <strong className="text-3xl">PRM Ministries</strong>
        <div className="text-sm">The word of God that changes the world</div>
      </div>
    </Link>
  );
};

export default Logo;
