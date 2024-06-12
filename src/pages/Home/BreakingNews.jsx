import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-700 m-2 p-3 rounded">
      <button className="btn btn-info btn-sm">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
