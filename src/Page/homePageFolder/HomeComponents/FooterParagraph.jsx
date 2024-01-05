function FooterParagraph({ paragraphText, textLink }) {
  return (
    <>
      <p className="text:sm my-2 font-normal leading-[24px] sm:my-[10px] sm:text-base md:text-[18px]">
        <a className="cursor-pointer  " href={textLink}>
          {paragraphText}
        </a>
      </p>
    </>
  );
}

export default FooterParagraph;
