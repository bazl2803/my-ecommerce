/**
 * Types
 */
enum Headings {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "title",
  "subtitle",
  "body",
  "caption",
}

interface Props {
  children: string;
  heading: string;
}

/**
 * Definition
 */
const Typography = ({ children, heading }: Props) => {
  return <div className={`Typography Typography--${heading}`}>{children}</div>;
};

export default Typography;
