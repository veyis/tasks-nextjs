import Link from "next/link";

const AboutPage = () => {
  // page meta data
  // const metadata = {
  //     title: 'About Us Page',
  //     description: 'A tutorial for Next.js',
  // };

  return (
    <div>
      <h1 className="text-7xl">About Us Page</h1>

      <Link href="/">
        <a className="text-2xl">Home Page</a> {/* Corrected className */}
      </Link>
    </div>
  );
};

export default AboutPage;
