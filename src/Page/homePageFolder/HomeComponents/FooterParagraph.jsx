import { Link } from "react-router-dom";
function FooterParagraph({ paragraphText, textLink }) {
  return (
    <>
      <p className="text:sm my-2 font-normal leading-[24px] sm:my-[10px] sm:text-base md:text-[18px]">
        <Link className="cursor-pointer  " to={textLink}>
          {paragraphText}
        </Link>
      </p>
    </>
  );
}

export default FooterParagraph;
