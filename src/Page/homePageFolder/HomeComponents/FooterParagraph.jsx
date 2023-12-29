function FooterParagraph({ paragraphText, textLink }) {
  return (
    <>
      <p className="my-[10px] text-[18px] font-normal leading-[24px]">
        <a className="cursor-pointer  " href={textLink}>
          {paragraphText}
        </a>
      </p>
    </>
  );
}

export default FooterParagraph;
